from django.views import generic
from .models import Project
from django.http import HttpResponse

class IndexView(generic.TemplateView):
    template_name = 'portfolio/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        projects = Project.objects.all()
        context['projects'] = projects
        return context

class DetailView(generic.DetailView):
    model = Project
    template_name = 'portfolio/project_detail.html'

    def get_context_data(self, **kwargs):
        context = super(DetailView, self).get_context_data(**kwargs)