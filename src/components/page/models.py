from django.db import models
from django.contrib.auth.models import User


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)

    def __str__(self):
        return self.full_name


class Student(models.Model):
    full_name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    grade = models.CharField(max_length=20)   # پایه تحصیلی
    photo = models.ImageField(upload_to='students/', blank=True, null=True)

    def __str__(self):
        return self.full_name


class Evaluation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="evaluations")
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)

    continuous_score = models.IntegerField(default=0)  # نمره مستمر
    final_score = models.IntegerField(default=0)       # نمره پایانی
    comment = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "ارزشیابی"
        verbose_name_plural = "ارزشیابی‌ها"

    def __str__(self):
        return f"{self.student.full_name} - {self.continuous_score}/{self.final_score}"
