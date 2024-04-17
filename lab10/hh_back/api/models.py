from django.db import models
from django.contrib.auth.models import User

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='companies',
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name="vacancies"
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='vacancies',
        null=True,
        blank=True
    )

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }
