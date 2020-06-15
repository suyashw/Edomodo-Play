from __future__ import unicode_literals
from django.db import models

<<<<<<< HEAD
class subject(models.Model) :
    sub_id = models.IntegerField(primary_key=True)

    def __str__(self):
        return str(self.sub_id)

class question(models.Model) :
    ques_id = models.IntegerField(primary_key=True)
=======
class question(models.Model) :
    ques_id = models.IntegerField()
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
    statement = models.CharField(max_length=500)
    op1 = models.CharField(max_length=300)
    op2 = models.CharField(max_length=300)
    op3 = models.CharField(max_length=300)
    op4 = models.CharField(max_length=300)
<<<<<<< HEAD
    ans = models.CharField(max_length=300)
    correct = models.IntegerField()
    incorrect = models.IntegerField()
    TCI = models.FloatField()
    time = models.FloatField()
    clusters = models.IntegerField()
    subject = models.ForeignKey(subject, related_name='subUser')
=======
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e

    def __str__(self):
        return str(self.ques_id)

class user(models.Model) :
<<<<<<< HEAD
    user_id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=100)
    stars = models.IntegerField()
    badges = models.IntegerField()
    rank = models.IntegerField()
    clusters = models.IntegerField()
    points = models.IntegerField()
=======
    username = models.CharField(max_length=200)
    user_id = models.IntegerField()
    quest = models.ForeignKey(question, on_delete=models.CASCADE, related_name='questionKey')
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e

    def __str__(self):
        return self.username


<<<<<<< HEAD
class quiz(models.Model) :
    quiz_id = models.IntegerField(primary_key=True)
    quiz_name = models.CharField(max_length=10)
    quiz_date = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(user, on_delete=models.CASCADE, related_name='quizUserID')

    def __str__(self):
        return str(self.quiz_id)

class answer(models.Model) :
    answer_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(user, on_delete=models.CASCADE, related_name='ansUserID')
    ques_id = models.ForeignKey(question, on_delete=models.CASCADE, related_name='ansQuesID')
    answer = models.IntegerField()
    is_skipped = models.PositiveSmallIntegerField()
    subject = models.ForeignKey(subject, on_delete=models.CASCADE, related_name='ansSub')
    quiz_id = models.ForeignKey(quiz,  on_delete=models.CASCADE, related_name='ansQuiz')
    time_taken = models.FloatField()

    def __str__(self):
        return str(self.answer_id)
=======
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
