from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


# Create your models here.


class Movie(models.Model):
    Title = models.CharField(max_length=36)
    Description = models.TextField(max_length=400)

    def no_of_rating(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            sum += rating.star
        if sum > 0:
            return int(sum/len(ratings))
        else:
            return 0


class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    star = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (('user', 'movie'))
        index_together = (('user', 'movie',))
