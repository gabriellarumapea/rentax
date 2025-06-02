from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from .models.meta import Base, DBSession

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application."""
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    config = Configurator(settings=settings)
    config.add_static_view(name='static', path='rentax_gabriella_backend:static')
    config.include('pyramid_jinja2')
    config.include('.routes')
    config.include('.models')
    config.include('.views.default')
    config.include('.views.cars')
    config.include('.views.bookings')

    config.scan()
    return config.make_wsgi_app()
