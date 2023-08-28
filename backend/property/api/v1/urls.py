
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PropertyViewSet,AmenityViewSet,AddressViewSet,AddressViewSet,AmenityViewSet,PropertyViewSet,AddressViewSet,AmenityViewSet,PropertyViewSet,AddressViewSet,AmenityViewSet,PropertyViewSet
router = DefaultRouter()
router.register('property', PropertyViewSet )
router.register('amenity', AmenityViewSet )
router.register('address', AddressViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
