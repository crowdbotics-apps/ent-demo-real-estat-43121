from django.contrib import admin
from .models import Address,Amenity,Property
admin.site.register(Property)
admin.site.register(Amenity)
admin.site.register(Address)

# Register your models here.
