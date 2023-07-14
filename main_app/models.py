from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# import time may be useful

# Create your models here.

# the character class model should have every possible attribute for every class and then depending on which class they are creating only update/add the specific ones?
class Character_Class(models.Model):
    # I am going to manually set the class name based on a dropdown box that they can select from (Warrior, Mage, Archer)
    name = models.CharField(max_length=20)

    # same with the stats, based on the class they selected they will be given certain default values
    health = models.IntegerField(default=100)

    # make the stats out of 100 max?
    strength = models.IntegerField(default=50)
    speed = models.IntegerField(default=50)

    # starts with 0 defense and goes up when you put on armor?
    defense = models.IntegerField(default=1)

    # dodge can be 1/100 to successfully evade an attack? goes up based on class later?
    dodge = models.IntegerField(default=1)
    block = models.IntegerField(default=1)
    # after a successful block you can have a chance to counterattack?
    counter = models.IntegerField(default=1)

    # This makes it so you show the name of your object in the admin model page
    def __str__(self):
        return self.name


class Character(models.Model):
    name = models.CharField(max_length=25)
    # for now I'm going to allow the user to input their own image but I probably want to only allow them to choose from a few set ones per class?
    image = models.CharField(max_length=250)
    character_class = models.ForeignKey(Character_Class, on_delete=models.CASCADE, related_name="character_class")
    background = models.TextField(max_length=1000, default='')

    bonushealth = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Health')
    bonusstrength = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Strength')
    bonusspeed = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Speed')
    bonusdefense = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Defense')
    bonusdodge = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Dodge')
    bonusblock = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Block')
    bonuscounter = models.IntegerField(default=0, validators=[MaxValueValidator(50), MinValueValidator(0)], verbose_name='Bonus Counter')
    
    # automatically adds what time they were created at for age purposes
    created_at = models.DateTimeField(auto_now_add=True)

    # This makes it so you show the name of your object in the admin model page
    # def __str__(self):
    #     return self.background

