let paused = true
let breakTime = false
let studyCounter = 1
let difference = 1500;
let minutes, seconds;

function counterSelect(){
    if(studyCounter % 8 == 0){
        difference = 900;
        document.getElementById("section").innerHTML = "Long break";
    }
    else if(studyCounter % 2 == 0){
        difference = 300;
        document.getElementById("section").innerHTML = "Short break";
    }
    else{
        difference = 1500;
        document.getElementById("section").innerHTML = "Time to study!";
        peony();

    }
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
        if(difference == 1500 || difference < 0){
            counterSelect()
        }
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
                studyCounter = studyCounter + 1;
                clearInterval(countDown);
                studyOver.play();
                counterSelect();
                if(studyCounter % 8 == 0){
                    document.getElementById("countdown").innerHTML = "15:00";
                }
                else if (studyCounter % 2 == 0){
                    document.getElementById("countdown").innerHTML = "05:00";
                }
                else{
                    document.getElementById("countdown").innerHTML = "25:00";
                    document.getElementById("counter").innerHTML = "Study Session #" + (2 % studyCounter);
                }
                document.title = "Florodoro";
                countDown = 0;
            }
        }, 1000);
    }
}

function peony(){
    document.body.style.backgroundColor = "#c87782"
    document.getElementById("section").style.color = "#9c4a51"
    document.getElementById("counter").style.color = "#9c4a51"
    document.getElementById("countdown").style.borderBottom = "#9c4a51 dashed 1px"
    document.getElementById("start").style.backgroundColor = "#c87782"
    document.getElementById("pause").style.backgroundColor = "#c87782"
    document.getElementById("start").style.border = "#c87782 1px solid"
    document.getElementById("pause").style.border = "#c87782 1px solid"
    document.getElementsByClassName("clock")[0].style.backgroundColor = "#e2b5b8"

}

startBtn.addEventListener('click', startCount);
pauseBtn.addEventListener('click', pauseCount);




