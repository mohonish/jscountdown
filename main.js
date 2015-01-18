window.onload = function onLoad() {
    var element = document.getElementById('container');
    var min = 10;
    var sec = 0;
    var seconds = new ProgressBar.Circle(element, {
    duration: 800,
    color: "#007fff",
    strokeWidth: 5,
    trailColor: "#fff"
    });
    setInterval(function() {
    var second;
    if(sec == 0) {
        if(min == 0) {
            element.innerHTML = "00:00";
            clearInterval(interval);
            return;
        }
        else {
            min--;
            sec = 60;
        }
    }
    if(min > 0) {
        var minute_text = min + ' : ';
    }
    else {
        var minute_text = '';
    }
    var second_text = ( (sec<10) ? '0' + sec: sec);
    second = minute_text + second_text;
    sec--;
    
    seconds.animate(sec / 60, function() {
        seconds.setText(second);
    });
    }, 1000);

}