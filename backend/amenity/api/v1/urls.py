
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AmenityViewSet,AmenityViewSet,AmenityViewSet,AmenityViewSet
router = DefaultRouter()
router.register('amenity', AmenityViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
