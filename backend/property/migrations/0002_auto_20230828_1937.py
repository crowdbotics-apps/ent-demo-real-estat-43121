# Generated by Django 2.2.28 on 2023-08-28 19:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='property',
            name='address',
        ),
        migrations.RemoveField(
            model_name='property',
            name='amenity',
        ),
    ]