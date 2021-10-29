---
title: My First Blog Post
date: '2021-10-20T12:00:00.00Z'
description: 'DJANGOOOOO'
---

I have been working with Django for a few months now and I’ve grown to appreciate this framework compared to Flask. While setting up Django used to take me a few days, now it takes me a few minutes. 

Moreover, below are the steps to creating a Django Project:

Set up your Django virtual environment

Once the virtual environment is set up you can now move forward with the following:

cd python_stack/django/django_intro
django_intro> django-admin start project your_project_name_here
django_intro> cd your_project_name_here
your_project_name_here> python manage.py runserver
Open localhost: 8000
your_project_name_here> python manage.py startapp your_app_name_here

IN settings.py [your_project_name_here/your_project_name_here/settings.py]

INSTALLED_APPS = [
       'your_app_name_here', # added this line. Don't forget the comma!!
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
   ]    # the trailing comma after the last item in a list, tuple, or dictionary is commonly accepted in Python
			
IN your_project_name_here/your_project_name_here/urls.py
from django.urls import path, include           # import include
# from django.contrib import admin              # comment out, or just delete
urlpatterns = [
    path('', include('your_app_name_here.urls')),	   
    # path('admin/', admin.sites.urls)         # comment out, or just delete
]

your_project_name_here/your_app_name_here/urls.py
from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),	   
]
And then actually put a function called index in our app's views.py file:

your_project_name_here/your_app_name_here/views.py
from django.shortcuts import render, HttpResponse
def index(request):
    	return HttpResponse("this is the equivalent of @app.route('/')!")

TIME TO RUN THE APP! USING:
your_project_name_here> python manage.py runserver 
Place localhost:800/ on your browser!!
It should look something like the image below. 

If you are still confused, please email me or look into some youtube videos in the meantime:
https://www.youtube.com/watch?v=UmljXZIypDc


![Mountain](./mountain.jpg)

Aliquam aliquid rem facere dolorum consectetur consequatur distinctio [mollitia id modi repellendus](https://github.com/RyanFitzgerald/devfolio) vero quae dolorem commodi soluta voluptates iusto nobis est dolore provident, porro veritatis placeat nemo impedit! Asperiores culpa delectus hic qui saepe, ipsum quia, exercitationem repellendus magni soluta sit suscipit laborum ducimus.

## Asperiores culpa delectus hic qui saepe

### Facere labore velit ad autem

Vitae veritatis quae eius quis vel soluta cumque? Facere labore velit ad autem. Nisi recusandae ducimus molestiae error ipsa quaerat, dignissimos suscipit similique itaque sunt provident quasi minus ut porro. Optio modi harum _dolore necessitatibus exercitationem_ blanditiis magni error ipsum, odit deleniti eligendi facilis, nesciunt delectus sit nostrum porro quam accusamus excepturi labore sequi maiores soluta?

### Porro veritatis placeat nemo impedit

Veritatis et praesentium totam neque earum commodi nesciunt dolor quibusdam incidunt non, ex dicta molestias omnis maiores, maxime velit perferendis tenetur aut porro nostrum, suscipit soluta necessitatibus deserunt nobis. Minus rem dicta eos exercitationem illum consequatur consectetur praesentium voluptas. Dolor inventore quasi necessitatibus odio eaque doloribus.

> Repudiandae iusto et iure pariatur aliquid, quisquam, non sed culpa, dignissimos recusandae facilis. Debitis hic, quaerat recusandae ad id, quis nisi perspiciatis quo aliquid natus similique.

Illum esse recusandae facere ipsam fugiat est eaque ducimus facilis provident, distinctio cum aut corporis officiis quo fugit, similique temporibus inventore quidem tempora commodi saepe dicta! Numquam fugiat quibusdam aut ut, voluptatibus accusamus **repellendus quas minus consequuntur** possimus! Est eaque nesciunt, reiciendis voluptate placeat aspernatur doloremque unde cum et architecto suscipit quam facere corrupti nihil odit eum minima voluptatem nobis.

## Voluptatibus accusamus repellendus quas minus

Ipsum quod, ut animi mollitia ipsam repellat, dolore voluptate quibusdam quasi reiciendis necessitatibus odio ea nostrum illo explicabo? Ducimus, in repudiandae. Ratione dolore sequi in animi obcaecati incidunt reprehenderit illo repellat atque aperiam, praesentium eligendi! Sed voluptas voluptatem sunt distinctio pariatur ullam? Laudantium laboriosam.

- Numquam fugiat quibusdam aut ut
- Soluta necessitatibus deserunt nobis
- Illum esse recusandae facere ipsam

Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit inventore sunt, consequatur omnis tempore ullam natus.

1. Numquam fugiat quibusdam aut ut
2. Soluta necessitatibus deserunt nobis
3. Illum esse recusandae facere ipsam

Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit inventore sunt, consequatur omnis tempore ullam natus, porro odit aut, atque asperiores repudiandae corporis quidem esse eos provident velit perferendis magni fugit eum quisquam eligendi. Atque distinctio iure aliquam veniam inventore, soluta est, cum accusantium possimus illum quasi eveniet sed amet ipsa culpa vel in delectus laboriosam repellendus totam. Facere.

## Suscipit soluta necessitatibus deserunt nobi

Minus rem dicta eos exercitationem illum consequatur consectetur praesentium voluptas. Dolor inventore quasi necessitatibus odio eaque doloribus.

```js
const helloWorld = (name = 'World') => {
  return `Hello ${name}!`;
};

helloWorld();
helloWorld('John Doe');
```

Numquam fugiat quibusdam aut ut, voluptatibus accusamus repellendus quas minus consequuntur possimus!
