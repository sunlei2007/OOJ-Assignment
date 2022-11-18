'use strict';
const btnSet = document.querySelector(".form-submit");
const inputAlarm = document.querySelector(".form-time");
const timeTitle = document.querySelector(".time-cls");
const timeAlarm = document.querySelector(".time-set-cls");
const ringSound = new Audio("./assets/audio/ring.wav");
ringSound.type = "audio/wav";

window.onload = function () {
    setInterval(function () {
        timeTitle.innerHTML = new Date().toLocaleTimeString();
        if (timeTitle.innerHTML.substring(3) === timeAlarm.innerHTML) {
            timeTitle.style.color = "#0988f3";
            ringSound.play();
        }
    }, 1000);
}


btnSet.onclick = function () {
    if (inputAlarm.value === "") {
        return;
    }
    let pattern = /[0-5][0-9]:[0-5][0-9]$/;
    if (!pattern.test(inputAlarm.value)) {
        inputAlarm.value = "";
        alert("Please enter time!");
    }
    else {
        timeAlarm.innerHTML = inputAlarm.value;
        inputAlarm.value = "";
    }
    return false;
}