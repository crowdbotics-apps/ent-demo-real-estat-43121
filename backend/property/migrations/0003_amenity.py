# Generated by Django 2.2.28 on 2023-08-28 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0002_auto_20230828_1937'),
    ]

    operations = [
        migrations.CreateModel(
            name='Amenity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amenities_1', models.CharField(max_length=255)),
                ('amenities_2', models.CharField(blank=True, max_length=255, null=True)),
                ('amenities_3', models.CharField(blank=True, max_length=255, null=True)),
                ('amenities_4', models.BigIntegerField(blank=True, null=True)),
            ],
        ),
    ]