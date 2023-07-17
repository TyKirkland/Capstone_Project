from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# import time may be useful

# Create your models here.

# the character class model should have every possible attribute for every class and then depending on which class they are creating only update/add the specific ones?
class Character_Class(models.Model):
    # I am going to manually set the class name based on a dropdown box that they can select from (Warrior, Mage, Archer)
    name = models.CharField(max_length=20, verbose_name="Name")

    # same with the stats, based on the class they selected they will be given certain default values
    health = models.IntegerField(default=100, verbose_name="Health")

    # make the stats out of 100 max?
    strength = models.IntegerField(default=50, verbose_name="Strength")
    speed = models.IntegerField(default=50, verbose_name="Speed")

    # starts with 0 defense and goes up when you put on armor?
    defense = models.IntegerField(default=1, verbose_name="Defense")

    # dodge can be 1/100 to successfully evade an attack? goes up based on class later?
    dodge = models.IntegerField(default=1, verbose_name="Dodge Chance")
    block = models.IntegerField(default=1, verbose_name="Block Chance")
    # after a successful block you can have a chance to counterattack?
    counter = models.IntegerField(default=1, verbose_name="Counter Chance")

    # This makes it so you show the name of your object in the admin model page
    def __str__(self):
        return self.name

class Armor(models.Model):
    name = models.CharField(max_length=25, verbose_name="Armor's Name")
    image = models.CharField(max_length=250, verbose_name="Image")
    durability = models.IntegerField(default=0, verbose_name="Armor's Durability")
    health = models.IntegerField(default=0, verbose_name="Bonus Health")
    defense = models.IntegerField(default=0, verbose_name="Bonus Defense")
    magic_defense = models.IntegerField(default=0, verbose_name="Bonus Magic Defense")
    health_regen = models.IntegerField(default=0, verbose_name="Bonus Health Regeneration")
    background = models.TextField(max_length=1000, default='', verbose_name="Background")

    def __str__(self):
        return self.name


class Weapon(models.Model):
    name = models.CharField(max_length=25, verbose_name="Weapon's Name")
    image = models.CharField(max_length=250, verbose_name="Image")
    strength = models.IntegerField(default=0, verbose_name="Bonus Strength")
    block = models.IntegerField(default=0, verbose_name="Bonus Block Chance")
    counter = models.IntegerField(default=0, verbose_name="Bonus Counter Chance")
    crit = models.IntegerField(default=0, verbose_name="Critical Hit Chance")
    armor_piercing = models.IntegerField(default=0, verbose_name="Armor Piercing")
    life_steal = models.IntegerField(default=0, verbose_name="Life Steal")
    poison_chance = models.IntegerField(default=0, verbose_name="Poison Chance")
    poison_damage = models.IntegerField(default=0, verbose_name="Poison Damage")
    background = models.TextField(max_length=1000, default='', verbose_name="Background")


    def __str__(self):
        return self.name


class Character(models.Model):
    name = models.CharField(max_length=25, verbose_name="Name")
    # for now I'm going to allow the user to input their own image but I probably want to only allow them to choose from a few set ones per class?
    image = models.CharField(max_length=250, verbose_name="Image")
    character_class = models.ForeignKey(Character_Class, on_delete=models.CASCADE, related_name="character_class", verbose_name="Character Class")
    background = models.TextField(max_length=1000, default='', verbose_name="Background")

    armor = models.ForeignKey(Armor, on_delete=models.SET_NULL, related_name="armor", null=True, blank=True, verbose_name="Armor")
    weapon = models.ForeignKey(Weapon, on_delete=models.SET_NULL, related_name="weapon", null=True, blank=True, verbose_name="Weapon")
    bonushealth = models.IntegerField(default=0, verbose_name='Bonus Health')
    bonusstrength = models.IntegerField(default=0, verbose_name='Bonus Strength')
    bonusspeed = models.IntegerField(default=0, verbose_name='Bonus Speed')
    bonusdefense = models.IntegerField(default=0, verbose_name='Bonus Defense')
    bonusdodge = models.IntegerField(default=0, verbose_name='Bonus Dodge Chance')
    bonusblock = models.IntegerField(default=0, verbose_name='Bonus Block Chance')
    bonuscounter = models.IntegerField(default=0, verbose_name='Bonus Counter Chance')
    
    # automatically adds what time they were created at for age purposes
    created_at = models.DateTimeField(auto_now_add=True)

    # This makes it so you show the name of your object in the admin model page
    # def __str__(self):
    #     return self.background

