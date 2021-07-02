const handSec = document.querySelector('.hand-sec');
const handMin = document.querySelector('.hand-min');
const handHour = document.querySelector('.hand-hour');

let clock  = setTimeout(function updateClock() {
    const currentTime = new Date();
    const s = currentTime.getSeconds() * 6;
    const m = currentTime.getMinutes() * 6;
    const h = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5;

    handSec.style.transform = `rotate(${s}deg)`;
    handMin.style.transform = `rotate(${m}deg)`;
    handHour.style.transform = `rotate(${h}deg)`;

    clock = setTimeout(updateClock, 1000);
}, 1000);