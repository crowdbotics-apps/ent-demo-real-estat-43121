from django.conf import settings
from django.db import models
class Property(models.Model):
    'Generated Model'
    property_id = models.IntegerField()
    property_name = models.CharField(max_length=255,null=True,blank=True,)
    rent = models.IntegerField(null=True,blank=True,)
    region = models.CharField(max_length=255,null=True,blank=True,)
    move_out_date = models.DateField(null=True,blank=True,)
    lease_term_months = models.IntegerField(null=True,blank=True,)
    image_url = models.CharField(max_length=255,null=True,blank=True,)
    address = models.ForeignKey("address.Address",on_delete=models.CASCADE,null=True,blank=True,related_name="property_address",)
    amenity = models.ForeignKey("amenity.Amenity",on_delete=models.CASCADE,null=True,blank=True,related_name="property_amenity",)

# Create your models here.
