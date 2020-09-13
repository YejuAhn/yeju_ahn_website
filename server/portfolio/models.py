from django.db import models
from django.urls import reverse

class Project(models.Model):
    project_title = models.CharField(max_length = 200, default = "")
    short_description = models.CharField(max_length=50, default = "")
    date = models.CharField(max_length=20, default="")
    description = models.TextField()
    lesson_learned = models.TextField()
    link = models.URLField(default = None, null = True, blank = True)
    image = models.ImageField(upload_to = 'project_image', blank = True, null = True)
    detail_image = models.ImageField(upload_to = 'project_image', blank = True, null = True)
    order = models.PositiveIntegerField(default = 0)

    class Meta:
        ordering = ['order']

    def get_absolute_url(self):
        return reverse('portfolio-detail', args = [str(self.pk)])

    def __str__(self):
        return self.project_title

class Tag(models.Model):
    project = models.ForeignKey(Project, on_delete = models.CASCADE, related_name = 'tag')
    tag_title = models.CharField(max_length = 100, default = "")
    order = models.PositiveIntegerField(default = 0)

    class Meta:
        ordering = ['project__order', 'order']

    def __str__(self):
        return self.tag_title

class Contact(models.Model):
    name = models.CharField(max_length=30, default="")
    email = models.EmailField(max_length=254, default="")
    message = models.TextField(max_length=2000, default=None, blank = True, null = True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name