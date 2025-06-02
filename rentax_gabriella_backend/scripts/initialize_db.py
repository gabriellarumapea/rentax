from ..models.meta import Base, DBSession
from ..models.mymodel import Car, Booking
from pyramid.paster import get_appsettings
from sqlalchemy import create_engine

def initialize_database():
    settings = get_appsettings('development.ini')
    engine = create_engine(settings['sqlalchemy.url'])
    Base.metadata.create_all(engine)
    DBSession.configure(bind=engine)

if __name__ == '__main__':
    initialize_database()
    print("Database initialized")
