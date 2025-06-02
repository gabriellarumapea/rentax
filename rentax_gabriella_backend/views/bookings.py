from pyramid.view import view_config
from pyramid.httpexceptions import HTTPForbidden, HTTPNotFound
from ..models.meta import DBSession
from ..models.mymodel import Booking
from datetime import datetime

def is_admin(request):
    return request.headers.get('X-Role') == 'admin'

def is_user(request):
    return request.headers.get('X-Role') == 'user'

@view_config(route_name='bookings', request_method='OPTIONS', renderer='json')
def cors_preflight(request):
    return {}

@view_config(route_name='bookings', request_method='GET', renderer='json')
def list_bookings(request):
    if is_admin(request):
        bookings = DBSession.query(Booking).all()
    elif is_user(request):
        user_id = request.headers.get('X-User')
        if not user_id:
            return HTTPForbidden(json_body={"error": "User ID header missing"})
        bookings = DBSession.query(Booking).filter(Booking.user_id == user_id).all()
    else:
        return HTTPForbidden(json_body={"error": "Forbidden, role missing"})
    return [
        {
            'id': b.id,
            'car_id': b.car_id,
            'user_id': b.user_id,
            'start_date': b.start_date.strftime('%Y-%m-%d') if b.start_date else None,
            'end_date': b.end_date.strftime('%Y-%m-%d') if b.end_date else None,
            'total_price': b.total_price,
            'status': b.status,
        } for b in bookings
    ]

@view_config(route_name='bookings', request_method='POST', renderer='json')
def create_booking(request):
    if not is_user(request):
        return HTTPForbidden(json_body={"error": "Only user can book"})
    data = request.json_body
    user_id = request.headers.get('X-User')
    if not user_id:
        return HTTPForbidden(json_body={"error": "User ID header missing"})
    try:
        booking = Booking(
            car_id=data.get('car_id'),
            user_id=user_id,
            start_date=datetime.strptime(data.get('start_date'), '%Y-%m-%d'),
            end_date=datetime.strptime(data.get('end_date'), '%Y-%m-%d'),
            total_price=data.get('total_price'),
            status=data.get('status') or 'active'
        )
        DBSession.add(booking)
        return {"message": "Booking created"}
    except Exception as e:
        return HTTPForbidden(json_body={"error": str(e)})

@view_config(route_name='booking_detail', request_method='GET', renderer='json')
def get_booking(request):
    booking_id = request.matchdict.get('id')
    booking = DBSession.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        return HTTPNotFound(json_body={"error": "Booking not found"})
    return {
        'id': booking.id,
        'car_id': booking.car_id,
        'user_id': booking.user_id,
        'start_date': booking.start_date.strftime('%Y-%m-%d') if booking.start_date else None,
        'end_date': booking.end_date.strftime('%Y-%m-%d') if booking.end_date else None,
        'total_price': booking.total_price,
        'status': booking.status,
    }

@view_config(route_name='booking_detail', request_method='PUT', renderer='json')
def update_booking(request):
    if not is_user(request):
        return HTTPForbidden(json_body={"error": "Only user can update"})
    booking_id = request.matchdict.get('id')
    booking = DBSession.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        return HTTPNotFound(json_body={"error": "Booking not found"})
    data = request.json_body
    for key in ['car_id', 'start_date', 'end_date', 'total_price', 'status']:
        if key in data:
            if key in ['start_date', 'end_date']:
                setattr(booking, key, datetime.strptime(data[key], '%Y-%m-%d'))
            else:
                setattr(booking, key, data[key])
    return {"message": "Booking updated"}

@view_config(route_name='booking_detail', request_method='DELETE', renderer='json')
def delete_booking(request):
    if not is_user(request):
        return HTTPForbidden(json_body={"error": "Only user can delete"})
    booking_id = request.matchdict.get('id')
    booking = DBSession.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        return HTTPNotFound(json_body={"error": "Booking not found"})
    DBSession.delete(booking)
    return {"message": "Booking deleted"}

def includeme(config):
    config.add_route('bookings', '/api/bookings')
    config.add_route('booking_detail', '/api/bookings/{id}')
