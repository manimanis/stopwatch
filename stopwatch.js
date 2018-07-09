// global vars
var elapsedTime = 0;
var timerStarted = false;
var lastRecorded = null;
var interval = null;

function setup() {
    document.getElementById('startBtn').addEventListener('click', function() {
        if (!timerStarted) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
        resetAll();
    });

    document.getElementById('recordBtn').addEventListener('click', function() {
        if (timerStarted) {
            appendPastTime(elapsedTime);
        }
    });
}

function startTimer() {
    timerStarted = true;
    interval = setInterval(function() {
        elapsedTime += 0.01;
        document.getElementById('elapsedTime').innerText = elapsedTime.toFixed(2);
    }, 10);
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        timerStarted = false;
    }
}

function appendPastTime(elapsedTime) {
    if (!lastRecorded || (lastRecorded && elapsedTime != lastRecorded)) {
        document.getElementById('pastTimes').innerHTML += '<div>' + elapsedTime.toFixed(2) + '</div>';
        lastRecorded = elapsedTime;
    }
}


function resetAll() {
    document.getElementById('elapsedTime').innerText = '0';
    document.getElementById('pastTimes').innerHTML = '';

    stopTimer();

    elapsedTime = 0;
    lastRecorded = null;
    timerStarted = false;
    interval = null;
}
/************************/
setup();