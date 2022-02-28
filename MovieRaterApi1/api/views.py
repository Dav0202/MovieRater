from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.db import models
from django.contrib.auth.models import User
from .models import Movie, Rating
from .serializers import MovieSerializer, RatingSerializer, UserSerializer


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):
        if 'star' in request.data:
            movie = Movie.objects.get(id=pk)
            star = request.data['star']
            user = request.user
            print('user', user)
            try:
                rating = Rating.objects.get(user=user.id, movie=movie.id)
                rating.star = star
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'This is updated',
                            'result ': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(
                    user=user, movie=movie, star=star)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating Created',
                            'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

            print('movie title', movie.Title)
            print(user.username)
            response = {'message': 'its working'}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'you need to put in stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    '''weird stuff'''
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        response = {'message': 'you cant update this way'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        response = {'message': 'you cant create this way'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
