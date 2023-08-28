
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PropertyViewSet,AmenityViewSet,AmenityViewSet,PropertyViewSet,AmenityViewSet,PropertyViewSet,AmenityViewSet,PropertyViewSet
router = DefaultRouter()
router.register('property', PropertyViewSet )
router.register('amenity', AmenityViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
