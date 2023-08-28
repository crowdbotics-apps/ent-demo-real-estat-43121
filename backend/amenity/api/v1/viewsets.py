from rest_framework import authentication
from amenity.models import Amenity,Amenity,Amenity
from .serializers import AmenitySerializer,AmenitySerializer,AmenitySerializer
from rest_framework import viewsets

class AmenityViewSet(viewsets.ModelViewSet):
    serializer_class = AmenitySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Amenity.objects.all()