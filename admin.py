from django.contrib import admin
from .models import (
    Choice,
    Course,
    Department,
    Enrollment,
    Instructor,
    InstructorEmail,
    Question,
    Student,
)


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
admin.site.register(Student)
admin.site.register(Department)
admin.site.register(Course)
admin.site.register(Instructor)
admin.site.register(InstructorEmail)
admin.site.register(Enrollment)


