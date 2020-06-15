from django.conf.urls import url
from . import views
<<<<<<< HEAD

urlpatterns = [
    # /quiz/
    url(r'^$', views.login.as_view()),
    url(r'^quiz_user_id=(?P<user_id>[-\w]+)/$', views.quesList.as_view(), name='questionView'),
    url(r'^lead_user_id=(?P<user_id>[-\w]+)/$', views.leadList.as_view(), name='leadView'),
=======
from django.views.generic.base import TemplateView

urlpatterns = [
    # /quiz/
    url(r'^$', TemplateView.as_view(template_name='quiz.html')),
    #url(r'^abcd/', views.quesList.as_view())
    url(r'^(?P<user_id>[-\w]+)$', views.quesList.as_view(), 'domain.views.output')
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
]