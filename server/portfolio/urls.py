from django.urls import path
from django.views.generic import TemplateView
from .views import IndexView, DetailView

urlpatterns = [
    path('', IndexView.as_view(), name = 'portfolio-index'),
    path('portfolio/about', TemplateView.as_view(template_name='portfolio/about.html'), name = 'about-me'),
    path('portfolio/<int:pk>', DetailView.as_view(), name='portfolio-detail'),
]
