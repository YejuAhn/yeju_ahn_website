from django.contrib import admin
from .models import Project, Tag, Contact

class TagInline(admin.StackedInline):
    model = Tag
    extra = 0

class ProjectAdmin(admin.ModelAdmin):
    model = Project
    inlines = [TagInline]
    list_display = ('__str__', 'order')
    list_editable = ('order', )

class ContactAdmin(admin.ModelAdmin):
    model = Contact
    list_display = ('__str__', 'email', 'date')

admin.site.register(Project, ProjectAdmin)
admin.site.register(Contact, ContactAdmin)