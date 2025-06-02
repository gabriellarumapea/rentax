from sqlalchemy import Column, Integer, String, Boolean, Date, Float, ForeignKey
from sqlalchemy.orm import relationship
from .meta import Base

class Car(Base):
    __tablename__ = 'cars'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    brand = Column(String(50))
    year = Column(String(4))
    price_per_day = Column(Float)
    is_available = Column(Boolean, default=True)
    type = Column(String(50))
    description = Column(String(255))
    image = Column(String(255))
    status = Column(String(20))

    bookings = relationship("Booking", back_populates="car")


class Booking(Base):
    __tablename__ = 'bookings'
    id = Column(Integer, primary_key=True)
    car_id = Column(Integer, ForeignKey('cars.id'))
    user_id = Column(String(50))  # username sebagai user_id
    start_date = Column(Date)
    end_date = Column(Date)
    total_price = Column(Float)
    status = Column(String(20))

    car = relationship("Car", back_populates="bookings")
