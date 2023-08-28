from rest_framework import serializers
from amenity.models import Amenity,Amenity

class AmenitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Amenity
        fields = "__all__"