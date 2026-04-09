import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text


class Student(models.Model):
    student_name = models.CharField(max_length=100)

    def __str__(self):
        return self.student_name


class Department(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    course_code = models.CharField(max_length=20, unique=True)
    course_name = models.CharField(max_length=150)
    department = models.ForeignKey(
        Department,
        on_delete=models.PROTECT,
        related_name="courses",
        null=True,
        blank=True,
    )

    def __str__(self):
        return f"{self.course_code} - {self.course_name}"


class Instructor(models.Model):
    instructor_name = models.CharField(max_length=100)

    def __str__(self):
        return self.instructor_name


class InstructorEmail(models.Model):
    instructor = models.ForeignKey(
        Instructor,
        on_delete=models.CASCADE,
        related_name="emails",
    )
    instructor_email = models.EmailField(unique=True)

    def __str__(self):
        return self.instructor_email


class Enrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="enrollments")
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="enrollments")
    instructor = models.ForeignKey(
        Instructor,
        on_delete=models.SET_NULL,
        related_name="enrollments",
        null=True,
        blank=True,
    )
    grade = models.CharField(max_length=5)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["course", "student"],
                name="unique_course_student_enrollment",
            )
        ]

    def __str__(self):
        return f"{self.student} | {self.course} | {self.grade}"
