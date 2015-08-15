---
layout: raw
category: Readme
---
# Мастерская успеха

Jekyll theme based on [landing-page bootstrap theme ](http://startbootstrap.com/templates/landing-page/)

## Как настроить под себя
 - Положите необходимые изображения в `/img/services/`
 - Создайте посты для различных разделов в `/_posts/`:
 
     О сайте: About
     
     О проекте Project
     
     Об авторе Author
     
     О компании: Company
     
     Регистрация: Register

 - Содержание постов должно быть следующим:

```
---
layout: default
img: ipad.png
category: About
title: О сайте
---
The description of this service
```

Разберем поподробнее:

```
layout: default
```
 - обозначает используемый макет используйте default (по умолчанию)

```
img: ipad.png
```
 - изображение возле поста (то, которое вы положили в ). Если необходимо несколько изображений, перечислите их в квадратных скобках. Вот так:

```
img: [i_am.jpg, my_family.jpg, my_command.jpg, travel.png, travel_1.png]
```

```
category: About
```
 - раздел, куда попадет пост. Возможны следующие варианты:
     О сайте: About
     О проекте Project
     Об авторе Author
     О компании: Company
     Регистрация: Register
     
```
title: О сайте
```
 - Заголовок поста
 
```
--- 
```
 - Этими символами (три минуса) обозначается начало и конец служебной информации. Они обязательно должны быть в файле!
 После них идет текст статьи. Используется система разметки текста [markdown](https://ru.wikipedia.org/wiki/Markdown).

Изображения вставляем так:
 
```
![](img/services/succes_stair.jpg){:width="100%" vspace="5"}
```

Youtube видео так:

```
![](http://img.youtube.com/vi/I89ShxerXIU/maxresdefault.jpg){:width="100%" class="youtube" rel="I89ShxerXIU"}
```

Здесь *I89ShxerXIU* - код вашего видео из Youtube (**в двух местах**)

## Demo
View this jekyll theme in action [here](https://timurey.github.io/)

## Screenshot
![screenshot](https://raw.githubusercontent.com/swcool/landing-page-theme/master/img/screenshot.png)

===

For more Jekyll details, read [documentation](http://jekyllrb.com/).
This Jekyll theme used [Freelancer Jekyll theme](https://github.com/jeromelachaud/freelancer-theme/) as reference.

## License
The contents of this repository are licensed under the [Apache
2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Version
1.0.1
