from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'project_title',
            'lesson_learned',
            'image',
            'tag'
        )
        model = Project