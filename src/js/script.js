// инициализация WOW.js
new WOW().init();

const newsBnt = document.querySelector(".news__left");
const newsContent = document.querySelector(".news__content");
const newsArrow = document.querySelector(".news__left__arrow-img");
const mobileMenuBtn = document.querySelector(".mobile-menu__icons");
const mobileMenu = document.querySelector(".menu");
const menuBtnClose = document.querySelector(".menu-btn__close");
const menuLink = document.querySelectorAll(".left-menu__link");
const menuItem = document.querySelectorAll(".left-menu__iem");

// show news

newsBnt.addEventListener('click', () => {
    newsContent.classList.toggle("show");
    newsArrow.classList.toggle("active-arrow");
});

// show menu

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("memu-show");
});

// close menu
menuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("memu-show");
});


// timer
function timer() {
  // Задаем дату отсчета
  // Set the reference date
  let deadline = "2022-05-20 GMT+0300";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      // Получаем часы, минуты и секунды
      // Get hours, minutes and seconds
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector(".days__number"),
      hours = timer.querySelector(".hours__number"),
      minutes = timer.querySelector(".minutes__number"),
      seconds = timer.querySelector(".seconds__number"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock("timer", deadline);
}
timer();

// footerTimer

function footerTimer() {
  // Задаем дату отсчета
  // Set the reference date
  let deadline = "2022-05-20 GMT+0300";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      // Получаем часы, минуты и секунды
      // Get hours, minutes and seconds
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let footerTime = document.getElementById(id),
      days = footerTime.querySelector(".days__number"),
      hours = footerTime.querySelector(".hours__number"),
      minutes = footerTime.querySelector(".minutes__number"),
      seconds = footerTime.querySelector(".seconds__number"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock("footerTime", deadline);
}
footerTimer();

// scroll
(function () {

  var btnScrollDown = document.querySelector(".first__bottom-arrow");

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener("click", scrollDown);
})();

