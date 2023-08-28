from django.conf import settings
from django.db import models
class Amenity(models.Model):
    'Generated Model'
    amenity_1 = models.CharField(max_length=255,)
    amenity_2 = models.CharField(max_length=255,null=True,blank=True,)
    amenity_3 = models.CharField(max_length=255,null=True,blank=True,)
    amenity_4 = models.CharField(max_length=255,null=True,blank=True,)

# Create your models here.
