from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
<<<<<<< HEAD
    url(r'^$', TemplateView.as_view(template_name='/home/suyash/Desktop/EdmodoR/edmarket/templates/login.html')),
    #url(r'^$', include('play.urls', namespace='login', app_name='login')),
    url(r'^home/', include('play.urls', namespace='home', app_name='home')),
    url(r'^quiz/', include('play.urls', namespace='quiz', app_name='quiz')),
    url(r'^lead/', include('play.urls', namespace='lead', app_name='lead')),
]
=======
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^quiz/', include('play.urls')),
    url(r'^lead/', TemplateView.as_view(template_name='lead.html')),
]


"""
url(r'^get_quiz?userid=<int:userid>/',),
url(r'^quiz/', include('play.urls')),
TemplateView.as_view(template_name='quiz.html'),
"""
>>>>>>> 21bc2e0b6d254d6cc1c10df7bef94362fa727c6e
