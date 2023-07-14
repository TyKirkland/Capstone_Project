from django.urls import path
from . import views
from main_app.views import testFight

urlpatterns = [
    path('', views.CharacterList.as_view(), name="character_list"),
    path('new/', views.CharacterCreate.as_view(), name='character_create'),
    path('<int:pk>/', views.CharacterDetail.as_view(), name='character_detail'),
    path('<int:pk>/update', views.CharacterUpdate.as_view(), name='character_update'),
    path('<int:pk>/delete', views.CharacterDelete.as_view(), name='character_delete'),
    path('fight/', views.CharacterFight.as_view(), name='character_fight'),
    path('fight/characters', testFight, name='test_fight'),
    
]