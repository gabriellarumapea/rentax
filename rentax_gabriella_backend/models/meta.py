from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DBSession = scoped_session(sessionmaker())
Base = declarative_base()
