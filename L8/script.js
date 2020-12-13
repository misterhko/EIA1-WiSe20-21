//Array Pads & Sounds
var pad = [];
pad[0] = new Audio("assets/A.mp3");
pad[1] = new Audio("assets/C.mp3");
pad[2] = new Audio("assets/F.mp3");
pad[3] = new Audio("assets/G.mp3");
pad[4] = new Audio("assets/hihat.mp3");
pad[5] = new Audio("assets/kick.mp3");
pad[6] = new Audio("assets/laugh-1.mp3");
pad[7] = new Audio("assets/laugh-2.mp3");
pad[8] = new Audio("assets/snare.mp3");
//Eventlistener Pads
document.querySelector(".pad1").addEventListener("click", function () {
    playSample(0);
    recordingSample(0);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(1);
    recordingSample(1);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(2);
    recordingSample(2);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(3);
    recordingSample(3);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(4);
    recordingSample(4);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(5);
    recordingSample(5);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(6);
    recordingSample(6);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(7);
    recordingSample(7);
});
document.querySelector(".pad9").addEventListener("click", function () {
    playSample(8);
    recordingSample(8);
});
//Function Pads
function playSample(i) {
    pad[i].play();
}
//Variablen Aufnahme & Löschen
var aufnahme = document.querySelector(".fa-microphone");
var löschen = document.querySelector(".fa-trash-alt");
var beat = [];
var abfrage;
//Variablen Play & Pause
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-stop");
var intervall;
var x = 0;
//Eventlistener Play & Pause
play.addEventListener("click", function () {
    Loop(true);
    play.classList.add("inactive");
    pause.classList.remove("inactive");
});
pause.addEventListener("click", function () {
    Loop(false);
    pause.classList.add("inactive");
    play.classList.remove("inactive");
});
//Function Play & Pause
function Loop(b) {
    if (b == true) {
        intervall = setInterval(function () {
            if (x < beat.length) {
                playSample(beat[x]);
                x++;
            }
            else {
                x = 0;
            }
        }, 400);
    }
    else {
        clearInterval(intervall);
    }
}
//Eventlistener Aufnahme & Löschen Button
aufnahme.addEventListener("click", function () {
    if (aufnahme.classList.contains("active")) {
        aufnahme.classList.remove("active");
        abfrage = false;
    }
    else {
        aufnahme.classList.add("active");
        abfrage = true;
    }
});
löschen.addEventListener("click", function () {
    beat.splice(0, beat.length);
});
//Function Aufnahme Button
function recordingSample(i) {
    if (abfrage == true) {
        beat.push(i);
    }
}
//# sourceMappingURL=script.js.map