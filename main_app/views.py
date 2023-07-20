# importing useful functions
from django import forms
from django.shortcuts import render, redirect
import json
from django.http import HttpResponse

# importing all our view options
from django.views import View
from django.views.generic import DetailView
from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

# importing models
from .models import Character, Character_Class, Armor, Weapon, Spell


# Create your views here.
class Home(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class CharacterList(TemplateView):
    
    template_name = 'character_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # the characters object will also give you access to the character class model that's related to it
        context['characters'] = Character.objects.all()
        return context

# this allows me to target the django forms instead of having them automatically created with the fields variable
class CharacterForm(forms.ModelForm):
    class Meta:
        model = Character
        fields = ['name', 'image', 'character_class', 'weapon', 'armor', 'bonushealth', 'bonusstrength', 'bonusspeed', 'bonusdefense', 'bonusmagicdefense', 'bonusdodge', 'bonusblock', 'bonuscounter', 'bonuscombo', 'spell1', 'spell2', 'spell3', 'spell4', 'background']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Customize the queryset for the 'weapon' field to exclude certain models
        self.fields['weapon'].queryset = Weapon.objects.exclude(id=11)
        self.fields['armor'].queryset = Armor.objects.exclude(id=4)
        self.fields['spell1'].queryset = Spell.objects.exclude(id=2)
        self.fields['spell2'].queryset = Spell.objects.exclude(id=2)
        self.fields['spell3'].queryset = Spell.objects.exclude(id=2)
        self.fields['spell4'].queryset = Spell.objects.exclude(id=2)


class CharacterCreate(CreateView):
    model = Character
    # these fields are what the user sees/can input when creating a new character
    # fields = ['name', 'image', 'character_class', 'weapon', 'armor', 'bonushealth', 'bonusstrength', 'bonusspeed', 'bonusdefense', 'bonusmagicdefense', 'bonusdodge', 'bonusblock', 'bonuscounter', 'bonuscombo', 'spell1', 'spell2', 'spell3', 'spell4', 'background']
    form_class = CharacterForm
    template_name = 'character_create.html'
    success_url = '/'

class CharacterDetail(DetailView):
    model = Character
    template_name = 'character_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # you can/may need to add context['objectname'] = Objectname.objects.all()
        return context
    

class CharacterUpdate(UpdateView):
    model = Character
    # fields = ['name', 'image', 'character_class', 'weapon', 'armor', 'bonushealth', 'bonusstrength', 'bonusspeed', 'bonusdefense', 'bonusmagicdefense', 'bonusdodge', 'bonusblock', 'bonuscounter', 'bonuscombo', 'spell1', 'spell2', 'spell3', 'spell4', 'background']
    form_class = CharacterForm
    template_name = 'character_update.html'
    success_url = '/'

class CharacterDelete(DeleteView):

    model = Character
    template_name = 'character_delete_confirmation.html'
    success_url = '/'

class ArmorList(TemplateView):
    
    template_name = 'armor_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # the characters object will also give you access to the character class model that's related to it
        # context['armors'] = Armor.objects.all()
        context['armors'] = Armor.objects.exclude(id=4)
        return context

class ArmorCreate(CreateView):
    model = Armor
    # these fields are what the user sees/can input when creating a new character
    fields = ['name', 'image', 'durability', 'health', 'defense', 'magic_defense', 'health_regen', 'dodge', 'background']
    template_name = 'armor_create.html'
    success_url = '/'

class ArmorDetail(DetailView):
    model = Armor
    template_name = 'armor_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # you can/may need to add context['objectname'] = Objectname.objects.all()
        return context
    
class ArmorUpdate(UpdateView):
    model = Armor
    fields = ['name', 'image', 'durability', 'health', 'defense', 'magic_defense', 'health_regen', 'dodge', 'background']
    template_name = 'armor_update.html'
    success_url = '/'

class ArmorDelete(DeleteView):

    model = Armor
    template_name = 'armor_delete_confirmation.html'
    success_url = '/'

class WeaponList(TemplateView):
    
    template_name = 'weapon_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # the characters object will also give you access to the character class model that's related to it
        # context['weapons'] = Weapon.objects.all()
        # this gives all weapons except the filler weapon!
        context['weapons'] = Weapon.objects.exclude(id=11)
        return context

class WeaponCreate(CreateView):
    model = Weapon
    # these fields are what the user sees/can input when creating a new character
    fields = ['name', 'image', 'strength', 'block', 'counter', 'crit', 'armor_piercing', 'life_steal', 'poison_chance', 'poison_damage', 'combo', 'background']
    template_name = 'weapon_create.html'
    success_url = '/'

class WeaponDetail(DetailView):
    model = Weapon
    template_name = 'weapon_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # you can/may need to add context['objectname'] = Objectname.objects.all()
        return context
    
class WeaponUpdate(UpdateView):
    model = Weapon
    fields = ['name', 'image', 'strength', 'block', 'counter', 'crit', 'armor_piercing', 'life_steal', 'poison_chance', 'poison_damage', 'combo', 'background']
    template_name = 'weapon_update.html'
    success_url = '/'

class WeaponDelete(DeleteView):

    model = Weapon
    template_name = 'weapon_delete_confirmation.html'
    success_url = '/'
    
class SpellList(TemplateView):
    
    template_name = 'spell_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # the characters object will also give you access to the character class model that's related to it
        # context['spells'] = Spell.objects.all()
        context['spells'] = Spell.objects.exclude(id=2)

        return context

class SpellCreate(CreateView):
    model = Spell
    # these fields are what the user sees/can input when creating a new character
    fields = ['name', 'image', 'on_use', 'water_damage', 'earth_damage', 'fire_damage', 'air_damage', 'description']
    template_name = 'spell_create.html'
    success_url = '/'

class SpellDetail(DetailView):
    model = Spell
    template_name = 'spell_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # you can/may need to add context['objectname'] = Objectname.objects.all()
        return context
    
class SpellUpdate(UpdateView):
    model = Spell
    fields = ['name', 'image', 'on_use', 'water_damage', 'earth_damage', 'fire_damage', 'air_damage', 'description']
    template_name = 'spell_update.html'
    success_url = '/'

class SpellDelete(DeleteView):

    model = Spell
    template_name = 'spell_delete_confirmation.html'
    success_url = '/'


class CharacterFight(TemplateView):
    template_name = 'character_fight.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['characters'] = Character.objects.all()
        return context
    
def testFight(request):
    if request.method == 'POST':

        # here we are getting each character's id to then throw into our url
        selected_characters_ids = request.POST.getlist('selected_characters')
        selected_characters_ids2 = request.POST.getlist('selected_characters2')

        # this automatically throws fight in front of the url
        return redirect(f"{selected_characters_ids[0]}/{selected_characters_ids2[0]}")
    else:
        return HttpResponse(request.method)

class CharacterBattle(TemplateView):
    template_name = 'character_battle.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        pk = [self.kwargs.get('pk')]
        pk2 = [self.kwargs.get('pk2')]
        character1 = Character.objects.filter(id__in=pk)
        character2 = Character.objects.filter(id__in=pk2)
        print(pk)
        character1 = character1[0]
        character2 = character2[0]

        fillerWeapon = Weapon.objects.filter(id__in=[11])
        fillerArmor = Armor.objects.filter(id__in=[4])
        fillerSpell = Spell.objects.filter(id__in=[2])
        fillerWeapon = fillerWeapon[0]
        fillerArmor = fillerArmor[0]
        fillerSpell = fillerSpell[0]

        if(not character1.weapon):
            character1.weapon = fillerWeapon
        if(not character2.weapon):
            character2.weapon = fillerWeapon
        if(not character1.armor):
            character1.armor = fillerArmor
        if(not character2.armor):
            character2.armor = fillerArmor
        if(not character1.spell1):
            character1.spell1 = fillerSpell
        if(not character2.spell1):
            character2.spell1 = fillerSpell
        if(not character1.spell2):
            character1.spell2 = fillerSpell
        if(not character2.spell2):
            character2.spell2 = fillerSpell
        if(not character1.spell3):
            character1.spell3 = fillerSpell
        if(not character2.spell3):
            character2.spell3 = fillerSpell
        if(not character1.spell4):
            character1.spell4 = fillerSpell
        if(not character2.spell4):
            character2.spell4 = fillerSpell


        context['character1'] = character1
        context['character2'] = character2
        return context
