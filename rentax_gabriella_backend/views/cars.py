from pyramid.view import view_config
from pyramid.httpexceptions import HTTPForbidden, HTTPNotFound
from ..models.meta import DBSession
from ..models.mymodel import Car
from datetime import datetime

def is_admin(request):
    return request.headers.get('X-Role') == 'admin'

@view_config(route_name='cars', request_method='GET', renderer='json')
def list_cars(request):
    cars = DBSession.query(Car).all()
    result = []
    for car in cars:
        result.append({
            'id': car.id,
            'name': car.name,
            'brand': car.brand,
            'year': car.year,
            'price_per_day': car.price_per_day,
            'type': car.type,
            'description': car.description,
            'image': car.image,
            'status': car.status,
        })
    return result

@view_config(route_name='cars', request_method='POST', renderer='json')
def create_car(request):
    if not is_admin(request):
        return HTTPForbidden()
    data = request.json_body
    car = Car(
        name=data.get('name'),
        brand=data.get('brand'),
        year=data.get('year'),
        price_per_day=data.get('price_per_day'),
        type=data.get('type'),
        description=data.get('description'),
        image=data.get('image'),
        status=data.get('status') or 'available'
    )
    DBSession.add(car)
    return {"message": "Car created"}

@view_config(route_name='car_detail', request_method='GET', renderer='json')
def get_car(request):
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound()
    return {
        'id': car.id,
        'name': car.name,
        'brand': car.brand,
        'year': car.year,
        'price_per_day': car.price_per_day,
        'type': car.type,
        'description': car.description,
        'image': car.image,
        'status': car.status,
    }

@view_config(route_name='car_detail', request_method='PUT', renderer='json')
def update_car(request):
    if not is_admin(request):
        return HTTPForbidden()
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound()
    data = request.json_body
    for key in ['name', 'brand', 'year', 'price_per_day', 'type', 'description', 'image', 'status']:
        if key in data:
            setattr(car, key, data[key])
    return {"message": "Car updated"}

@view_config(route_name='car_detail', request_method='DELETE', renderer='json')
def delete_car(request):
    if not is_admin(request):
        return HTTPForbidden()
    car_id = request.matchdict.get('id')
    car = DBSession.query(Car).filter(Car.id == car_id).first()
    if not car:
        return HTTPNotFound()
    DBSession.delete(car)
    return {"message": "Car deleted"}
