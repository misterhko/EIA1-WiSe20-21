var pad = [];
pad[1] = new Audio('assets/A.mp3');
pad[2] = new Audio('assets/C.mp3');
pad[3] = new Audio('assets/F.mp3');
pad[4] = new Audio('assets/G.mp3');
pad[5] = new Audio('assets/hihat.mp3');
pad[6] = new Audio('assets/kick.mp3');
pad[7] = new Audio('assets/laugh-1.mp3');
pad[8] = new Audio('assets/laugh-2.mp3');
pad[9] = new Audio('assets/snare.mp3');
document.querySelector(".pad1").addEventListener("click", function () {
    playSample(1);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(2);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(3);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(4);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(5);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(6);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(7);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(8);
});
document.querySelector(".pad9").addEventListener("click", function () {
    playSample(9);
});
function playSample(a) {
    pad[a].play();
}
;
var Beat = [];
Beat[0] = new Audio('./assets/kick.mp3');
Beat[1] = new Audio('./assets/hihat.mp3');
Beat[2] = new Audio('./assets/snare.mp3');
Beat[3] = new Audio('./assets/hihat.mp3');
Beat[4] = new Audio('./assets/kick.mp3');
;
Beat[5] = new Audio('./assets/kick.mp3');
Beat[6] = new Audio('./assets/snare.mp3');
Beat[7] = new Audio('./assets/hihat.mp3');
var index = 0;
document.querySelector(".PlayButton").addEventListener("click", function () {
    setInterval(function () {
        Beat[index].play();
        index = index + 1;
    }, 400);
});
//# sourceMappingURL=script.js.map