from pyramid.view import view_config
from pyramid.httpexceptions import HTTPForbidden, HTTPNotFound
from ..models.meta import DBSession
from ..models.mymodel import Car
from datetime import datetime

def is_admin(request):
    return request.headers.get('X-Role') == 'admin'

def is_user(request):
    return request.headers.get('X-Role') == 'user'

@view_config(route_name='cars', request_method='OPTIONS', renderer='json')
@view_config(route_name='car_detail', request_method='OPTIONS', renderer='json')
def cors_preflight(request):
    return {}

@view_config(route_name='cars', request_method='GET', renderer='json')
def list_cars(request):
    cars = DBSession.query(Car).all()
    return [
        {
            "id": c.id,
            "brand": c.brand,
            "model": c.model,
            "year": c.year,
            "price_per_day": c.price_per_day,
            "status": c.status,
            "image_url": c.image_url,
        }
        for c in cars
    ]

@view_config(route_name='car_detail', request_method='GET', renderer='json')
def get_car(request):
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound(json_body={"error": "Car not found"})
    return {
        "id": car.id,
        "brand": car.brand,
        "model": car.model,
        "year": car.year,
        "price_per_day": car.price_per_day,
        "status": car.status,
        "image_url": car.image_url,
    }

@view_config(route_name='cars', request_method='POST', renderer='json')
def create_car(request):
    if not is_admin(request):
        return HTTPForbidden(json_body={"error": "Only admin can add car"})
    data = request.json_body
    try:
        car = Car(
            brand=data.get('brand'),
            model=data.get('model'),
            year=data.get('year'),
            price_per_day=data.get('price_per_day'),
            status=data.get('status') or 'available',
            image_url=data.get('image_url')
        )
        DBSession.add(car)
        return {"message": "Car created"}
    except Exception as e:
        return HTTPForbidden(json_body={"error": str(e)})

@view_config(route_name='car_detail', request_method='PUT', renderer='json')
def update_car(request):
    if not is_admin(request):
        return HTTPForbidden(json_body={"error": "Only admin can update car"})
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound(json_body={"error": "Car not found"})
    data = request.json_body
    for key in ['brand', 'model', 'year', 'price_per_day', 'status', 'image_url']:
        if key in data:
            setattr(car, key, data[key])
    return {"message": "Car updated"}

@view_config(route_name='car_detail', request_method='DELETE', renderer='json')
def delete_car(request):
    if not is_admin(request):
        return HTTPForbidden(json_body={"error": "Only admin can delete car"})
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound(json_body={"error": "Car not found"})
    DBSession.delete(car)
    return {"message": "Car deleted"}

def includeme(config):
    config.add_route('cars', '/api/cars')
    config.add_route('car_detail', '/api/cars/{id}')
