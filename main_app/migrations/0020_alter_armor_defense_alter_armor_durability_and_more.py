# Generated by Django 4.2.2 on 2023-07-19 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0019_alter_character_weapon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='armor',
            name='defense',
            field=models.IntegerField(blank=True, default=0, verbose_name='Bonus Defense'),
        ),
        migrations.AlterField(
            model_name='armor',
            name='durability',
            field=models.IntegerField(blank=True, default=0, verbose_name="Armor's Durability"),
        ),
        migrations.AlterField(
            model_name='armor',
            name='health',
            field=models.IntegerField(blank=True, default=0, verbose_name='Bonus Health'),
        ),
        migrations.AlterField(
            model_name='armor',
            name='health_regen',
            field=models.IntegerField(blank=True, default=0, verbose_name='Bonus Health Regeneration'),
        ),
        migrations.AlterField(
            model_name='armor',
            name='image',
            field=models.CharField(blank=True, default=' ', max_length=250, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='armor',
            name='magic_defense',
            field=models.IntegerField(blank=True, default=0, verbose_name='Bonus Magic Defense'),
        ),
        migrations.AlterField(
            model_name='armor',
            name='name',
            field=models.CharField(blank=True, default='', max_length=25, verbose_name="Armor's Name"),
        ),
        migrations.AlterField(
            model_name='spell',
            name='air_damage',
            field=models.IntegerField(blank=True, default=0, verbose_name='Air Damage'),
        ),
        migrations.AlterField(
            model_name='spell',
            name='earth_damage',
            field=models.IntegerField(blank=True, default=0, verbose_name='Earth Damage'),
        ),
        migrations.AlterField(
            model_name='spell',
            name='fire_damage',
            field=models.IntegerField(blank=True, default=0, verbose_name='Fire Damage'),
        ),
        migrations.AlterField(
            model_name='spell',
            name='image',
            field=models.CharField(blank=True, default=' ', max_length=250, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='spell',
            name='name',
            field=models.CharField(blank=True, default='', max_length=25, verbose_name="Spell's Name"),
        ),
        migrations.AlterField(
            model_name='spell',
            name='water_damage',
            field=models.IntegerField(blank=True, default=0, verbose_name='Water Damage'),
        ),
    ]
