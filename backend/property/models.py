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
class Amenity(models.Model):
    'Generated Model'
    amenities_1 = models.CharField(max_length=255,)
    amenities_2 = models.CharField(max_length=255,null=True,blank=True,)
    amenities_3 = models.CharField(max_length=255,null=True,blank=True,)
    amenities_4 = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
