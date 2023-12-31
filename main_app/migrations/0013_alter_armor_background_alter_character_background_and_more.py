# Generated by Django 4.2.2 on 2023-07-17 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0012_alter_character_armor_alter_character_weapon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='armor',
            name='background',
            field=models.TextField(blank=True, default='', max_length=1000, verbose_name='Background'),
        ),
        migrations.AlterField(
            model_name='character',
            name='background',
            field=models.TextField(blank=True, default='', max_length=1000, verbose_name='Background'),
        ),
        migrations.AlterField(
            model_name='weapon',
            name='background',
            field=models.TextField(blank=True, default='', max_length=1000, verbose_name='Background'),
        ),
    ]
