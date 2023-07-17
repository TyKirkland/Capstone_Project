from django.contrib import admin
from .models import Character, Character_Class, Armor, Weapon

# Register your models here.
# gives you access to them in the admin control page provided by Django
# remember to create a super user if you don't have one so you can log into the admin page!
admin.site.register(Character)
admin.site.register(Character_Class)
admin.site.register(Armor)
admin.site.register(Weapon)