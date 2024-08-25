// * ПРЕДЗАГРУЗЧИК

window.addEventListener("load", startLoader);

function startLoader() {
    let mask = document.querySelector(".mask");
    mask.classList.add("hide");
    setTimeout(function () {
        mask.remove();
    }, 600);
}

window.onload = function () {

    // * Прокрутка при клике на кнопку Up
    let bntUp = document.querySelector(".up-btn");

    bntUp.onclick = function (event) {
        event.preventDefault();

        const anchor = document.querySelector('#anchor-logo');
        anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // * ТЕСТ-ОПРОС

    let flagResult; // флаг, содержащий true/false - есть ли информация в блоке результата

    // запуск теста-опроса при клике на кнопку "Пройти опрос"
    const startTestBtn = document.querySelector(".button-for-questions");
    startTestBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        
        // * проверяем, были ли ранее выведены результаты (и следовательно скрыта форма)
        if(testForm.style.display === "none") {
            document.querySelector(".submit-btn").style.display = "block"; // кнопка "Отправить"
            testForm.style.display = "block"; // форма с тестом
            document.querySelector(".task").style.display = "block";  // вводный к форме текст
            document.querySelector(".result-box").style.display = "none"; // блок с результатом
            document.querySelector("#close-quiz-btn").style.display = "block"; // показать кнопку закрытия формы

            cancelChecking(); // вызов функции
        }

        const quiz = document.querySelector(".test-block");
        quiz.style.display = "block";

        // * кнопка закрытия опроса
        let closeBtn = document.querySelector("#close-quiz-btn");
        closeBtn.addEventListener("click", function() {
            quiz.style.display = "none";
            cancelChecking(); //вызов функции
        });

        // * клик по чекбоксу - выбор ответа и стилизация
        let points = document.querySelectorAll("input.test-point");
        let checkedBlockCount = 0; // количество выбранных пунктов (счетчик)

        points.forEach(function (input) {
            input.onclick = function () {
                input.classList.toggle("checked"); //добавление/удаление класса у input
                input.setAttribute("checked", true);
                let blockChecked = input.parentElement;
                //console.log(blockChecked);
                blockChecked.classList.toggle("checked-block-style"); //добавление/удаление класса у div (родителя input)

                // если пункт выбран - +1 к счетчику
                if(blockChecked.classList.contains("checked-block-style")) { 
                    checkedBlockCount += 1;
                } else {
                    checkedBlockCount -= 1;
                }
                //console.log(checkedBlockCount);

                // если выбран хотя бы 1 пункт
                if(checkedBlockCount >= 1) {
                    document.querySelector("#submit").classList.add("active-btn"); // сделать активной кнопку Отправить
                    document.querySelector(".warning-point").classList.add("hide-message"); // скрыть предупреждение
                } else {
                    document.querySelector("#submit").classList.remove("active-btn"); // сделать неактивной кнопку Отправить
                    document.querySelector(".warning-point").classList.remove("hide-message"); // показать предупреждение
                }
            };
            
        })

        // запуск обработки результатов теста при клике на кнопке "Отправить"
        let done = document.querySelector("#submit");
        done.addEventListener("click", countAnswers); // вызов функции
    }

    // * функция удаления выделения чекбоксов опроса и строк пунктов:
    // добавление сообщения, изменение статуса кнопки
    function cancelChecking() {

        let checkedPoint = document.querySelectorAll(".checked-block-style"); // выбранные пункты
        checkedPoint.forEach(function (elem) {
            elem.classList.remove("checked-block-style"); //удаление класса у div
        })

        let checkedInput = document.querySelectorAll(".test-point.checked"); // выбранные checkbox
        checkedInput.forEach(function (element) {
            element.classList.remove("checked"); //удаление checked у input

            if(element.checked === true) {
                element.checked = false;
                element.setAttribute("checked", false);
            } 
        })

        document.querySelector("#submit").classList.remove("active-btn"); // сделать неактивной кнопку Отправить
        document.querySelector(".warning-point").classList.remove("hide-message"); // показать предупреждение
    }

    // * объекты с данными по городам - название, изображение
    const minsk = {
        name: "Минск",
        src: "./images/img/minsk.jpg",
        image: new Image, // создание элемента <img>
    }

    const novogrudok = {
        name: "Новогрудок",
        src: "./images/img/novogrudok.jpg",
        image: new Image,
    }

    const mir = {
        name: "Мир",
        src: "./images/img/mir.jpg",
        image: new Image,
    }

    const nesvizh = {
        name: "Несвиж",
        src: "./images/img/nesvizh.jpg",
        image: new Image,
    }

    // установка источника изображения для городов (полный URL)
    minsk.image.src = minsk.src;
    novogrudok.image.src = novogrudok.src;
    mir.image.src = mir.src;
    nesvizh.image.src = nesvizh.src;

    // функция подсчета результатов
    function countAnswers() {
        console.log("Запуск функции подсчета");

        //начальные значения счетчиков по городам
        let countMinsk = 0;
        let countMir = 0;
        let countNesvizh = 0;
        let countNovogrudok = 0;

        //массив из всех блоков с выбранными пользователем элементами
        const answer = document.querySelectorAll(".checked-block-style");

        //перебор массива, поиск соответствующих классов и увеличение счетчиков
        for (let i = 0; i < answer.length; i++) {
            if (answer[i].classList.contains("minsk")) { countMinsk += 1; }
            if (answer[i].classList.contains("mir")) { countMir += 1; }
            if (answer[i].classList.contains("nesvizh")) { countNesvizh += 1; }
            if (answer[i].classList.contains("novogrudok")) { countNovogrudok += 1; }
        }
        console.log(`Результаты подсчета: Минск(${countMinsk}), Мир(${countMir}), Несвиж(${countNesvizh}), Новогрудок(${countNovogrudok})`);

        if(countMinsk !== 0 || countMir !== 0 || countNesvizh !== 0 || countNovogrudok !== 0 ) {
            console.log("Пользователь выбрал хотя бы 1 пункт!");

            //определение результата
            //создание массива из результатов теста
            const arr = [countMinsk, countMir, countNesvizh, countNovogrudok];

            let maxValue = Math.max(...arr); //максимальное значение из 4х значений
            let ind = arr.indexOf(maxValue) //индекс максимального значения в массиве

            //получение названия переменной в качестве результата
            function switchResult(index) {
                switch (index) {
                    case 0: return "countMinsk";
                    case 1: return "countMir";
                    case 2: return "countNesvizh";
                    case 3: return "countNovogrudok";
                }
            }

            let result = switchResult(ind); // город, который выбрал пользователь
            console.log(`result: ${result}`);

            prepareToShowResult(result); // вызов функции
        }
        
    }

    // функция подготовки к отображению результата
    function prepareToShowResult(result) {

        // скрыть форму, заголовок и кнопку "Ответить" после отправки ответа
        document.testForm.style.display = "none"; 
        document.querySelector(".task").style.display = "none";  
        document.querySelector("#submit").style.display = "none"; 

        //присваивание функции showResult новому свойству show объектов
        minsk.show = showResult;
        novogrudok.show = showResult;
        mir.show = showResult;
        nesvizh.show = showResult;

        // проверяем флаг - выведена ли информация в блоке результата
        console.log(`flagResult: ${flagResult}`);

        if(flagResult) {
            console.log("Сброс предыдущего результата");

            document.querySelector(".title-test").remove();
            document.querySelector(".city-name-test").remove();
            document.querySelector(".image-test").remove();
            document.querySelector(".result-box").style.display = "block";
        } 

        // запуск функции-сборки по выводу результата
        if (result === `countMinsk`) {
            minsk.show();
        }

        if (result === `countMir`) {
            mir.show();
        }

        if (result === `countNesvizh`) {
            nesvizh.show();
        }

        if (result === `countNovogrudok`) {
            novogrudok.show();
        }

    }

    // функция-сборка названия и изображения города для вывода результата
    const showResult = function () {
        console.log("Запуск функции сборки");

        //добавление нового класса результирующему блоку
        document.querySelector(".test-block").classList.add("results-block");
        document.querySelector("#close-quiz-btn").style.display = "none"; // скрыть кнопку закрытия формы

        let resultBox = document.querySelector(".result-box");
        resultBox.style.display = "block";

        let nameElement = document.createElement("p"); //вывод имени
        nameElement.className = "city-name-test";
        nameElement.textContent = `${this.name}`;
        resultBox.prepend(nameElement);

        let title = document.createElement("p"); //вывод заголовка
        title.className = "title-test";
        title.textContent = "Ваш город:";
        resultBox.prepend(title);

        let imgElement = document.createElement("img"); //вывод фото
        imgElement.className = "image-test";
        imgElement.setAttribute("src", `${this.src}`);
        resultBox.append(imgElement);

        flagResult = true; // флаг -> в блок добавлен результат
    }

    // * закрытие блока с результатами при клике на крестик

    const closeTest = document.querySelector(".close-results");
    closeTest.addEventListener("click", close);

    function close() {
        const quiz = document.querySelector(".test-block");
        quiz.style.display = "none";
        startTestBtn.style.display = "none";

        //добавление сообщения, что опрос пройден
        const passTest = document.querySelector(".text-button");
        let passMessage = document.createElement("p");
        passMessage.className = "pass-message";
        passMessage.insertAdjacentHTML("beforeend", "Опрос пройден. Спасибо! <br> Для повторного прохождения нажмите на кнопку ниже.");
        passTest.append(passMessage);

        // добавление кнопки перезапуска опроса
        let resetBtnBlock = document.createElement("div");
        resetBtnBlock.className = "resetBtnBlock";
        passMessage.after(resetBtnBlock);

        let resetBtnImg = document.createElement("img");
        resetBtnImg.setAttribute("src", "./images/icons/rotate-icon.svg");
        resetBtnBlock.append(resetBtnImg);

        // * Обновление блока после клика на иконку  
        resetBtnBlock.addEventListener("click", resetQuiz);

        function resetQuiz() {
            console.log("Перезагрузка теста");

            // удаление блока с сообщением и кнопки перезапуска опроса, чтобы они не дублировались в DOM 
            passMessage.remove();
            resetBtnBlock.remove();

            startTestBtn.style.display = "block"; //показать кнопку "Пройти опрос"
            startQuiz();
        }

    }

    // * БУРГЕР-МЕНЮ

    //получение доступа к кнопкам и блоку
    const burgerMenuOpenButton = document.querySelector(".open-burger-menu");
    const burgerMenuBlock = document.querySelector(".burger-menu-block");
    const burgerMenuCloseButton = document.querySelector(".close-burger-menu");

    //открытие меню при клике на бургер-меню
    burgerMenuOpenButton.addEventListener("click", openMenu);

    function openMenu() {
        burgerMenuBlock.style.display = "block";
        burgerMenuOpenButton.style.display = "none";
        burgerMenuCloseButton.style.display = "block";

        //закрытие бургер-меню по кнопке
        burgerMenuCloseButton.addEventListener("click", closeMenu);
    }

    function closeMenu() {
        document.querySelector(".burger-menu-block").style.display = "none";
        document.querySelector(".close-burger-menu").style.display = "none";
        document.querySelector(".open-burger-menu").style.display = "block";
    }

    // * СЛАЙДЕР
    slider.init(); //запуск слайдера после загрузки страницы

    //переключение слайдов по буллетам
    const bullet1 = document.querySelector("#bullet1");
    const bullet2 = document.querySelector("#bullet2");
    const bullet3 = document.querySelector("#bullet3");
    const bullet4 = document.querySelector("#bullet4");

    bullet1.onclick = function setTo1() {
        bullet1.className = "active";
        slider.set(slider.slides[3]);
        bullet2.removeAttribute("class");
        bullet3.removeAttribute("class");
        bullet4.removeAttribute("class");
    }

    bullet2.onclick = function setTo2() {
        bullet2.className = "active";
        slider.set(slider.slides[0]);
        bullet1.removeAttribute("class");
        bullet3.removeAttribute("class");
        bullet4.removeAttribute("class");
    }

    bullet3.onclick = function setTo3() {
        bullet3.className = "active";
        slider.set(slider.slides[1]);
        bullet2.removeAttribute("class");
        bullet1.removeAttribute("class");
        bullet4.removeAttribute("class");
    }

    bullet4.onclick = function setTo4() {
        bullet4.className = "active";
        slider.set(slider.slides[2]);
        bullet2.removeAttribute("class");
        bullet3.removeAttribute("class");
        bullet1.removeAttribute("class");
    }

    // * ЗВУК (мелодия)

    const audio = document.getElementById("audio");
    const buttonPlay = document.querySelector(".play");
    const buttonPause = document.querySelector(".pause");
    const buttonYesNoVolume = document.querySelector(".yes-no-volume");
    const buttonVolumeUp = document.querySelector(".volume-up");
    const buttonVolumeDown = document.querySelector(".volume-down");
    let flag = true;        //устанавливается, когда есть звук

    buttonPlay.addEventListener("click", function () {
        console.log("Музыка заиграла!");
        audio.play();
        audio.volume = 0.3;
    });

    buttonPause.addEventListener("click", function () {
        console.log("Музыка на паузе!");
        audio.pause();
    });

    buttonYesNoVolume.addEventListener("click", function () {
        if (flag === true) {
            console.log("Без звука!");
            audio.volume = 0.00009;
            flag = false;       //устанавливается, когда нет звука
            document.querySelector(".sound-off").style.display = "none";
            document.querySelector(".sound-on").style.display = "block";
        } else {
            console.log("Со звуком!");
            audio.volume = 0.3;
            flag = true;
            document.querySelector(".sound-off").style.display = "block";
            document.querySelector(".sound-on").style.display = "none";
            buttonVolumeUp.addEventListener("click", up);
            buttonVolumeDown.addEventListener("click", down);
        }
    });

    buttonVolumeUp.addEventListener("click", up);
    function up() {
        console.log("Увеличение громкости!");
        if (flag === true) {
            audio.volume += 0.1;
            if (audio.volume > 0.9) {
                audio.volume = 0.99;
                buttonVolumeUp.removeEventListener("click", up);
                buttonVolumeDown.addEventListener("click", down);
            }
        }
    }

    buttonVolumeDown.addEventListener("click", down);
    function down() {
        console.log("Уменьшение громкости!");
        if (flag === true) {
            audio.volume -= 0.1;
            if (+(audio.volume.toFixed(2)) <= 0.10) {
                audio.volume = 0.12;
                buttonVolumeDown.removeEventListener("click", down);
                buttonVolumeUp.addEventListener("click", up);
            }
        }
    }

    // кнопка открытия панели управления звуком при ширине экрана 1306px и менее
    const buttonMusicOn = document.querySelector(".audio-controls-on");
    const controls = document.querySelector(".audio-block");
    const buttonMusicOff = document.querySelector(".audio-controls-off");

    buttonMusicOn.addEventListener("click", openControls);

    function openControls() {
        console.log("Открыта панель");
        controls.style.display = "block";
        buttonMusicOn.style.display = "none";
        buttonMusicOff.style.display = "block";
        buttonMusicOff.addEventListener("click", closeControls);
    }

    function closeControls() {
        console.log("Закрыта панель");
        document.querySelector(".audio-block").style.display = "none";
        buttonMusicOff.style.display = "none";
        buttonMusicOn.style.display = "block";
    }

    // * ФОРМА ОБРАТНОЙ СВЯЗИ

    const buttonAsk = document.querySelector(".ask");
    buttonAsk.addEventListener("click", openQuestionForm);

    function openQuestionForm() {
        const questionForm = document.querySelector(".question-form");
        questionForm.style.display = "block";
    }

    //закрытие блока
    const closeFormBtn = document.querySelector("#close-question-form-btn");
    closeFormBtn.addEventListener("click", closeForm);

    function closeForm() {
        const questionForm = document.querySelector(".question-form");
        questionForm.style.display = "none";
    }
    
}

// * СЛАЙДЕР
//создание объекта-слайдера
const slider = {
    slides: ['./images/img/app2_3dmap.png', './images/img/app3_plan.png', './images/img/app4_objects.png', './images/img/app1_menu.png'],

    number: 0,

    set: function (image) {
        let block = document.querySelector(".screens-img");
        block.style.backgroundImage = "url(" + image + ")";
        block.style.backgroundRepeat = "no-repeat";
        block.style.backgroundPosition = "center center";
    },

    init: function () {
        this.set(this.slides[this.number]);
    },

    toLeft: function () {
        this.number--;
        if (this.number < 0) this.number = this.slides.length - 1;
        this.set(this.slides[this.number]);
        this.changeBulletToLeft();
    },

    toRight: function () {
        this.number++;
        if (this.number == this.slides.length) this.number = 0;
        this.set(this.slides[this.number]);
        this.changeBulletToRight();
    },

    changeBulletToLeft: function () {
        let activeBullet = document.querySelector(".slider-controls div.active");
        let previousBullet = activeBullet.previousElementSibling;
        if (previousBullet === null) previousBullet = document.querySelector("#bullet4");
        previousBullet.className = "active";
        activeBullet.removeAttribute("class");
    },

    changeBulletToRight: function () {
        let activeBullet = document.querySelector(".slider-controls div.active");
        let nextBullet = activeBullet.nextElementSibling;
        if (nextBullet === null) nextBullet = document.querySelector("#bullet1");
        nextBullet.className = "active";
        activeBullet.removeAttribute("class");
    }
};