from django.core.exceptions import ValidationError
from django.views import generic
from .models import Project
from django.shortcuts import redirect, render
from .models import Contact
from datetime import date
from .forms import ContactForm

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
        project = Project.objects.get(id = self.object.id)
        context['project'] = project
        return context

def createpost(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            print('valid')
            # form.save()
            contact = Contact()
            contact.name = request.POST.get('name')
            contact.email = request.POST.get('email')
            contact.message = request.POST.get('message')
            contact.date = date.today()
            contact.save()
            return redirect('portfolio-index')
        else:
            print(form.errors)
            content = {'form': form}
            render(request, 'portfolio/index.html', content)
            return redirect('portfolio-index')
    else:
        print('invalid')
        form = ContactForm()
        return redirect('portfolio-index')