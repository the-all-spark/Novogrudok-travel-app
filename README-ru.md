# Novogrudok-travel-app, промо-сайт туристического приложения (HTML | CSS | JS)

[Переключиться на английский | Switch to English](./README.md)

## О проекте
Промо-страница туристического приложения по г.Новогрудку, описывающая его сильные стороны и предоставляющее информацию о самом городе.

**Инструменты:** 
![image](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white "Visual Studio Code")
![image](./images/logo_animate.png "Adobe Animate")

**Языки:** 
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML") 
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS") 
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E "JS") 
![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white "jQuery") 

**Демо:** [Перейти на сайт](https://the-all-spark.github.io/Novogrudok-travel-app/)  
![screenshot](./images/site_screenshot.jpg "Скриншот сайта")

## Реализованный функционал:
1. предзагрузчик сайта в виде анимации (Adobe Animate CC);
2. панель управления звуковым сопровождением (кнопки воспроизведения музыки, паузы, отключения звука, увеличения и уменьшения громкости) (JS);
3. слайдер с экранами мобильного приложения (JS);
4. опрос-тест в блоке "Куда мне съездить?" (JS) - тест выдает название города и изображение:
   - если не выбрано ни одного пункта, отправка и очистка формы невозможны;
   - при выборе хотя бы одного пункта предупреждающее сообщение удаляется, кнопки "Отправить" и "Сбросить" становятся активными;
   - открытую форму можно закрыть, кликнув на иконку-"крестик" в верхнем правом углу (при этом, если форма была заполнена ранее, она очищается); 
   - при клике на кнопке "Сбросить" отменяется выделение пунктов опроса; 
   - после закрытия результата можно еще раз пройти опрос, кликнув по иконке "Reset".
5. форма обратной связи "Задать вопрос" (валидация с использованием библиотеки jQuery). После отправки формы выводится сообщение с благодарностью.
6. интегрирована Яндекс-карта с отмеченным городом Новогрудком (HTML);
7. интегрирован анимационный рекламный баннер (Adobe Animate CC);
8. адаптивная верстка (для ширины экрана от 1920 px до 350 px) (CSS).
