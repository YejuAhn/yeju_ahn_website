# Generated by Django 3.0.12 on 2023-11-26 02:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0014_auto_20200913_1340'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='second_detail_image',
            field=models.ImageField(blank=True, null=True, upload_to='project_image_two'),
        ),
    ]
