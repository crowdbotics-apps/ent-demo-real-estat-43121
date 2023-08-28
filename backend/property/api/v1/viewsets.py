from rest_framework import authentication
from property.models import Property,Property,Property
from .serializers import PropertySerializer,PropertySerializer,PropertySerializer
from rest_framework import viewsets

class PropertyViewSet(viewsets.ModelViewSet):
    serializer_class = PropertySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Property.objects.all()