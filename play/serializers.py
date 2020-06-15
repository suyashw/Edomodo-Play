<<<<<<< HEAD
from rest_framework.serializers import ModelSerializer
from . models import question, user

class questionSerializer(ModelSerializer):
	class Meta:
		model=question
		fields=('ques_id','statement','op1','op2','op3','op4', 'ans')

class userSerializer(ModelSerializer):
    class Meta:
        model=user
        fields=('user_id','username','badges','stars', 'rank')
=======
from rest_framework import serializers
from . models import question, user

class questionSerializer(serializers.ModelSerializer):
	class Meta:
		model=question
		fields=('ques_id','statement','op1','op2','op3','op4')

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields=('user_id','username','quest')
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
