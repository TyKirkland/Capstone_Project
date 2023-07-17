from django.urls import path
from . import views
from main_app.views import testFight

urlpatterns = [
    path('', views.Home.as_view(), name="home"),
    path('characters/', views.CharacterList.as_view(), name="character_list"),
    path('characters/new/', views.CharacterCreate.as_view(), name='character_create'),
    path('characters/<int:pk>/', views.CharacterDetail.as_view(), name='character_detail'),
    path('characters/<int:pk>/update', views.CharacterUpdate.as_view(), name='character_update'),
    path('characters/<int:pk>/delete', views.CharacterDelete.as_view(), name='character_delete'),
    path('armor/', views.ArmorList.as_view(), name="armor_list"),
    path('armor/new/', views.ArmorCreate.as_view(), name='armor_create'),
    path('armor/<int:pk>/', views.ArmorDetail.as_view(), name='armor_detail'),
    path('armor/<int:pk>/update', views.ArmorUpdate.as_view(), name='armor_update'),
    path('armor/<int:pk>/delete', views.ArmorDelete.as_view(), name='armor_delete'),
    path('weapons/', views.WeaponList.as_view(), name="weapon_list"),
    path('weapons/new/', views.WeaponCreate.as_view(), name='weapon_create'),
    path('weapons/<int:pk>/', views.WeaponDetail.as_view(), name='weapon_detail'),
    path('weapons/<int:pk>/update', views.WeaponUpdate.as_view(), name='weapon_update'),
    path('weapons/<int:pk>/delete', views.WeaponDelete.as_view(), name='weapon_delete'),
    path('fight/', views.CharacterFight.as_view(), name='character_fight'),
    path('fight/characters', testFight, name='test_fight'),
    path('fight/<int:pk>/<int:pk2>/', views.CharacterBattle.as_view(), name='character_battle'),
]