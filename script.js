/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

/*
    При нажатии на кнопку ☰
    открываем или закрываем меню.
*/

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

/*
    После выбора пункта меню
    закрываем мобильное меню.
*/

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =========================================
   BOSS BUTTON
========================================= */

const bossButton = document.getElementById("bossButton");

/*
    Небольшой интерактивный эффект
    для кнопки финального босса.
*/

bossButton.addEventListener("click", function () {

    bossButton.textContent = "⚔️ БИТВА НАЧИНАЕТСЯ...";

    bossButton.style.transform = "scale(1.05)";

    setTimeout(function () {

        bossButton.textContent = "ТЁМНЫЙ ЛОРД ЖДЁТ ТЕБЯ";

    }, 2000);

});


/* =========================================
   SCROLL ANIMATION
========================================= */

/*
    Добавляем появление элементов,
    когда пользователь прокручивает страницу.
*/

const cards = document.querySelectorAll(
    ".world-card, .artifact-card, .info-card, .weapon"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* Наблюдаем за всеми карточками */

cards.forEach(function (card) {

    observer.observe(card);

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "⚔️ Blade of the Ancient Guardian website loaded!"
);
