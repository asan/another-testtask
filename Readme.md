Сборка проекта:
```
npm install
gulp
```
Запустить вебсервер(если вдруг что:))
```
cd dist
python -m "SimpleHTTPServer"
open http://localhost:8000
```


Живое демо:
http://asan.github.io/nemo

Начальная конфигурация групп задаётся в `src/js/stores/initialData.json`, каждая группа для упрощения записи представляет собой массив, каждый элемент которого описывает сколько должно быть элементов в соответсвующей строке, как пример исхдное состояние записывается как:

```
[
  [6,2,5],
  [4,6]
]
```
