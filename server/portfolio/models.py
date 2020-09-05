from django.db import models

class Project(models.Model):
    project_title = models.CharField(max_length = 200, default = "")
    description = models.TextField()
    lesson_learned = models.TextField()
    image = models.ImageField(upload_to = 'project_image', blank = True, null = True)
    order = models.PositiveIntegerField(default = 0)

    class Meta:
        ordering = ['order']

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