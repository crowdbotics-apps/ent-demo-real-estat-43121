# Generated by Django 2.2.28 on 2023-08-28 19:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('amenity', '0001_initial'),
        ('address', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_id', models.IntegerField()),
                ('property_name', models.CharField(blank=True, max_length=255, null=True)),
                ('rent', models.IntegerField(blank=True, null=True)),
                ('region', models.CharField(blank=True, max_length=255, null=True)),
                ('move_out_date', models.DateField(blank=True, null=True)),
                ('lease_term_months', models.IntegerField(blank=True, null=True)),
                ('image_url', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='property_address', to='address.Address')),
                ('amenity', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='property_amenity', to='amenity.Amenity')),
            ],
        ),
    ]
