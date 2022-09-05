let hour = 0,
    min = 0,
    sec = 0,
    count = 0;

let timer = false;

// start function
function start() {
    timer = true;
    stopWatch();
};

// stop function
function stop() {
    timer = false;
};

// reset function
function reset() {
    timer = false;

    hour = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hour').innerHTML = "00";
};

// final function
function stopWatch() {
    if (timer == true) {


        count = count + 1;


        if (count == 100) {
            sec = sec + 1;
            count = 0;
        };

        if (sec == 60) {
            min = min + 1;
            sec = 0;
            count = 0;
        };

        if (min == 60) {
            hour = hour + 1;
            min = 0;
            sec = 0;
            count = 0;
        };


        document.getElementById('count').innerHTML = count < 10 ? "0" + count : count;
        document.getElementById('sec').innerHTML = sec < 10 ? "0" + sec : sec;
        document.getElementById('min').innerHTML = min < 10 ? "0" + min : min;
        document.getElementById('hour').innerHTML = hour < 10 ? "0" + hour : hour;


        // 100 path, so wait 10 milisecond
        setTimeout("stopWatch()", 10);
    }

};