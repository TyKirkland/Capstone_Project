# Generated by Django 4.2.2 on 2023-07-20 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0021_character_class_magic_defense'),
    ]

    operations = [
        migrations.AddField(
            model_name='armor',
            name='dodge',
            field=models.IntegerField(blank=True, default=0, verbose_name='Bonus Dodge Chance'),
        ),
    ]