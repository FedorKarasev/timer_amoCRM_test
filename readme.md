# Таймер по тестовому заданию amoCRM

Для запуска таймера нужно создать объект класса Timer. В параметры класса необходимо передать селектор HTML элемента, который будет служить таймером.
Пример:

```
const timer = new Timer('.timer');
```

Для запуска таймера нужно запустить метод render:

```
timer.render();
```

Если таймер нужно остановить, используйте метод destroy:

```
timer.destroy();
```
