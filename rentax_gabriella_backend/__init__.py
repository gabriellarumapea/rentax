from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from .models.meta import Base, DBSession

def add_cors_headers_response_callback(event):
    def cors_headers(request, response):
        response.headers.update({
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Role, X-User',
        })
    event.request.add_response_callback(cors_headers)

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application."""
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    config = Configurator(settings=settings)
    config.add_subscriber(add_cors_headers_response_callback, 'pyramid.events.NewRequest')
    config.add_static_view(name='static', path='rentax_gabriella_backend:static')
    config.include('pyramid_jinja2')
    config.include('.routes')
    config.include('.models')
    config.include('.views.default')
    config.include('.views.cars')
    config.include('.views.bookings')
    config.include('.cors')

    config.scan()
    return config.make_wsgi_app()
