# Generated by Django 4.2.2 on 2023-07-19 18:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0018_alter_character_weapon_alter_weapon_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='weapon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='weapon', to='main_app.weapon', verbose_name='Weapon'),
        ),
    ]
