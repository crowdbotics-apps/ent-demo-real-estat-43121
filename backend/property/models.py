from django.conf import settings
from django.db import models
class Property(models.Model):
    'Generated Model'
    property_id = models.IntegerField()
    property_name = models.CharField(null=True,blank=True,max_length=255,)
    rent = models.IntegerField(null=True,blank=True,)
    region = models.CharField(null=True,blank=True,max_length=255,)
    move_out_date = models.DateField(null=True,blank=True,)
    lease_term_months = models.IntegerField(null=True,blank=True,)
    image_url = models.CharField(null=True,blank=True,max_length=255,)
    amenities = models.ForeignKey("property.Amenity",on_delete=models.CASCADE,null=True,blank=True,related_name="property_amenities",)
    address = models.ForeignKey("property.Address",on_delete=models.CASCADE,null=True,blank=True,related_name="property_address",)
class Amenity(models.Model):
    'Generated Model'
    amenities_1 = models.CharField(max_length=255,)
    amenities_2 = models.CharField(null=True,blank=True,max_length=255,)
    amenities_3 = models.CharField(null=True,blank=True,max_length=255,)
    amenities_4 = models.BigIntegerField(null=True,blank=True,)
class Address(models.Model):
    'Generated Model'
    city = models.CharField(max_length=255,)
    zip = models.IntegerField()
    address_1 = models.CharField(max_length=255,)
    address_2 = models.CharField(max_length=255,)
    state = models.CharField(max_length=255,)

# Create your models here.
