<<<<<<< HEAD
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from . models import user, question, answer
from django.shortcuts import get_object_or_404
from . serializers import userSerializer, questionSerializer
from django.contrib import auth
#from django.core.context_processors import csrf
from rest_framework.views import APIView
from rest_framework.response import Response

from . check import start



class quesList(APIView) :
    def get(request, *args, **kwargs) :
        user_id = kwargs.get('user_id', '')
        user_object = get_object_or_404(user, user_id = user_id)
        ques_obj = question.objects.filter(ques_id = 10)
        srl = questionSerializer(ques_obj, many=True)
        return Response(srl.data)
        #template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/quizextend.html'
        #context = {'ques_obj' : ques_obj, 'user_obj' : user_id}
        #return render(request, template , context)

"""
def quesView(request, *args, **kwargs) :
    user_id = kwargs.get('user_id', '')
    user_object = get_object_or_404(user, user_id=user_id)
    ques_obj = question.objects.filter(ques_id=user_object.q_id.ques_id)
    template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/quizextend.html'
"""


class leadList(APIView) :
    def get(self, request, *args, **kwargs) :
        user_id = kwargs.get('user_id', '')
        user_object = user.objects.order_by('rank')[:10]
        srl = userSerializer(user_object, many=True)
        return Response(srl.data)
        #template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/leadextend.html'
        #context = {'usr' : user_all, 'usr_obj':user_object}
        #return render(request, template, context)

class login(APIView) :
    def post(self, request) :
        if request.method == "POST" :
            username = request.POST.get('username', '')
            password = request.POST.get('password', '')

            request.session['username'] = username
            request.session['password'] = password

        usern = request.session['username']
        passn = request.session['password']

        login_objj = user.objects.filter(username=usern, password=passn)

        srl = userSerializer(login_objj, many=True)
        start()

        if usern is not None:
            return Response(srl.data)
        else :
            return HttpResponseRedirect('/ddssddsadsa/')

    def get(self, request):
        if request.method == "GET" :
            if request.session['username'] is not None :
                usern = request.session['username']
                passn = request.session['password']

                login_objj = user.objects.filter(username=usern, password=passn)
                srl = userSerializer(login_objj, many=True)
                return Response(srl.data)


class answerList(APIView) :
    def post(request) :
        if request.method == "POST" :
            usern = request.session['username']
            obj = get_object_or_404(user, username=usern)

        return ques_view(request,usern)
=======
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import question, user
from . serializers import questionSerializer, userSerializer

class quesList(APIView):
    def get(request, user_id):

        userid = user.objects.all()
        #user_id=20
        usr = request.GET.get('user_id', '')
        q = get_object_or_404(userid, user_id=usr)

        object = question.objects.filter(ques_id=q.quest.ques_id)
        serializer = questionSerializer(object, many=True)
        return Response(serializer.data)
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
