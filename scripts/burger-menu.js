window.onload = function() {

    //получение доступа к кнопкам и блоку
    const burgerMenuOpenButton = document.querySelector(".open-burger-menu");
    const burgerMenuBlock = document.querySelector(".burger-menu-block");
    const burgerMenuCloseButton = document.querySelector(".close-burger-menu");
    
    // открытие меню при клике на бургер-меню
    burgerMenuOpenButton.addEventListener("click",openMenu);

    function openMenu() {
        burgerMenuBlock.style.display = "block";
        burgerMenuOpenButton.style.display = "none";
        burgerMenuCloseButton.style.display = "block";

        //закрытие бургер-меню по кнопке
        burgerMenuCloseButton.addEventListener("click",closeMenu);
    }

    function closeMenu() {
        document.querySelector(".burger-menu-block").style.display = "none";
        document.querySelector(".close-burger-menu").style.display = "none";
        document.querySelector(".open-burger-menu").style.display = "block";
    }

}