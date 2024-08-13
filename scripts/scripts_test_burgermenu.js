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

    // Прокрутка при клике на кнопку Up
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

    //открытие теста при клике на кнопку "Пройти опрос"
    const startTest = document.querySelector(".button-for-questions");
    startTest.addEventListener("click", start);

    function start() {
        const quiz = document.querySelector(".test-block");
        quiz.style.display = "block";
    }

    //объекты с данными по городам - название, изображение
    const minsk = {
        name: "Минск",
        src: "./images/img/minsk.jpg",
        image: new Image,
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

    //установка источника изображения для городов
    minsk.image.src = minsk.src;
    novogrudok.image.src = novogrudok.src;
    mir.image.src = mir.src;
    nesvizh.image.src = nesvizh.src;

    //клик по кнопке - выбор ответа и стилизация

    let points = document.querySelectorAll("input.test-point");
    points.forEach(function (input) {
        input.onclick = function () {
            input.classList.toggle("checked"); //добавление/удаление класса input
            let blockChecked = input.parentElement;
            //console.log(blockChecked);
            blockChecked.classList.toggle("checked-block-style"); //добавление/удаление класса div
        };
    })

    //обработка результатов теста при клике на кнопке "Отправить"

    let done = document.querySelector("#submit");
    done.addEventListener("click", countAnswers);

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
        let result = switchResult(ind);

        //функция-сборка названия и изображения города для вывода результата
        const showResult = function () {
            console.log("Запуск функции сборки");

            //добавление нового класса результирующему блоку
            document.querySelector(".test-block").classList.add("results-block");

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
        }

        //присваивание функции showResult свойству show объектов
        minsk.show = showResult;
        novogrudok.show = showResult;
        mir.show = showResult;
        nesvizh.show = showResult;

        document.testForm.style.display = "none"; //скрыть форму после ответа
        done.style.display = "none";               //скрыть кнопку "Ответить"
        document.querySelector(".task").style.display = "none";  //скрыть заголовок

        //запуск функции по выводу результата
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

        //закрытие блока с результатами

        const closeTest = document.querySelector(".close-results");
        closeTest.addEventListener("click", close);

        function close() {
            const quiz = document.querySelector(".test-block");
            quiz.style.display = "none";
            startTest.style.display = "none";

            //добавление сообщения, что опрос пройден
            const passTest = document.querySelector(".text-button");
            let passMessage = document.createElement("p");
            passMessage.className = "pass-message";
            passMessage.insertAdjacentHTML("beforeend", "Опрос пройден. Спасибо! <br> Для повторного прохождения обновите страницу.");
            passTest.append(passMessage);
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

    //закрытие блока без отправления вопроса
    const closeFormBtn = document.querySelector(".close-block");
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