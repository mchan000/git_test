
let paused = true

let difference = 1500

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');

let countDown;

function pauseCount(){
    paused = true;
    clearInterval(countDown);
}

function startCount(){
    paused = false;
    if(paused == false){
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
    
            if (difference < 0){
                clearInterval(countDown);
                document.getElementById("countdown").innerHTML = "Break time";
            }
        }, 1000);
    }
}



startBtn.addEventListener('click', startCount);
pauseBtn.addEventListener('click', pauseCount);




