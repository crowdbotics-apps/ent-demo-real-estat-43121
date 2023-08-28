from django.conf import settings
from django.db import models
class Address(models.Model):
    'Generated Model'
    address_1 = models.CharField(max_length=255,)
    address_2 = models.CharField(max_length=255,null=True,blank=True,)
    city = models.CharField(max_length=255,null=True,blank=True,)
    state = models.CharField(max_length=255,null=True,blank=True,)
    zip = models.CharField(max_length=255,null=True,blank=True,)

# Create your models here.
