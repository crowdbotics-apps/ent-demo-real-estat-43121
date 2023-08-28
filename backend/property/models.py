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

# Create your models here.
