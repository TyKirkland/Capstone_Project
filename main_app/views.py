# importing useful functions
from django.shortcuts import render, redirect

# importing all our view options
from django.views import View
from django.views.generic import DetailView
from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

# importing models
from .models import Character, Character_Class


# Create your views here.
class CharacterList(TemplateView):
    
    template_name = 'character_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # the characters object will also give you access to the character class model that's related to it
        context['characters'] = Character.objects.all()
        return context

class CharacterCreate(CreateView):
    model = Character
    # these fields are what the user sees/can input when creating a new character
    fields = ['name', 'image', 'character_class', 'background', 'bonushealth', 'bonusstrength', 'bonusspeed', 'bonusdefense', 'bonusdodge', 'bonusblock', 'bonuscounter']
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
    fields = ['name', 'image', 'character_class', 'background', 'bonushealth', 'bonusstrength', 'bonusspeed', 'bonusdefense', 'bonusdodge', 'bonusblock', 'bonuscounter']
    template_name = 'character_update.html'
    success_url = '/'

class CharacterDelete(DeleteView):
    model = Character
    template_name = 'character_delete_confirmation.html'
    success_url = '/'