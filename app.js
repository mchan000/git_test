
let paused = true
let breakTime = false
let difference;
let minutes, seconds;

if(breakTime = false){
    difference = 1500;
}
else{
    difference = 300;
}

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let studyOver = new Audio('study_over.mp3');
let breakOver = new Audio('break_over.mp3');

let countDown;

function pauseCount(){
    paused = true;
    clearInterval(countDown);
    countDown = 0;
}

function startCount(){
    paused = false;
    if(countDown){

    }
    else if(paused == false){
        clearInterval(countDown);
        countDown = setInterval(function(){
            difference = difference - 1;
    
            let minutes = Math.floor(difference / 60)
            let seconds = Math.floor(difference % 60)
    
            if (seconds < 10){
                seconds = '0' + String(seconds);
            }
            if (minutes < 10){
                minutes = '0' + String(minutes);
            }
    
            document.getElementById("countdown").innerHTML = minutes + ":" + seconds
            document.title = minutes + ":" + seconds;
    
            if (difference < 0){
                clearInterval(countDown);
                studyOver.play();
                document.getElementById("countdown").innerHTML = "Break time";
                document.title = "Florodoro"
            }
        }, 1000);
    }
}

startBtn.addEventListener('click', startCount);
pauseBtn.addEventListener('click', pauseCount);




