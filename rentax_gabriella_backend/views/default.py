from pyramid.response import Response

def home_view(request):
    return Response('<h1>RentaX Backend API Running</h1>')

def includeme(config):
    config.add_route('home', '/')
    config.add_view(home_view, route_name='home')
