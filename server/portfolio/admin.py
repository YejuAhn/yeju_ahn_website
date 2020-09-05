from django.contrib import admin
from .models import Project, Tag

class TagInline(admin.StackedInline):
    model = Tag
    extra = 0

class ProjectAdmin(admin.ModelAdmin):
    inlines = [TagInline]
    list_display = ('__str__', 'order')
    list_editable = ('order', )

admin.site.register(Project, ProjectAdmin)