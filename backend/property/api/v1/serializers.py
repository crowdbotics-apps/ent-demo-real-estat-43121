from rest_framework import serializers
from property.models import Property,Amenity,Address,Address,Amenity,Property

class PropertySerializer(serializers.ModelSerializer):

    class Meta:
        model = Property
        fields = "__all__"

class AmenitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Amenity
        fields = "__all__"

class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = "__all__"