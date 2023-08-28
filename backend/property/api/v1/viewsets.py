from rest_framework import authentication
from property.models import Property,Amenity,Amenity,Property,Amenity,Property
from .serializers import PropertySerializer,AmenitySerializer,AmenitySerializer,PropertySerializer,AmenitySerializer,PropertySerializer
from rest_framework import viewsets

class PropertyViewSet(viewsets.ModelViewSet):
    serializer_class = PropertySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Property.objects.all()

class AmenityViewSet(viewsets.ModelViewSet):
    serializer_class = AmenitySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Amenity.objects.all()