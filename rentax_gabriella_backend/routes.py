def includeme(config):
    config.add_route('home', '/')
    config.add_route('cars', '/api/cars')
    config.add_route('car_detail', '/api/cars/{id}')
    config.add_route('bookings', '/api/bookings')
    config.add_route('booking_detail', '/api/bookings/{id}')
