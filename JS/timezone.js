var clocko;

var timeZone = -6.00;

var date = new Date();  
var timeZone_Difference = (timeZone * 60 + date.getTimezoneOffset()) * 60 * 1000;

function clocko_update() {
    var transformed_Date = new Date(new Date().getTime() + timeZone_Difference);
    var date_hours = transformed_Date.getHours();
    var date_minutes = transformed_Date.getMinutes();
    var date_seconds = transformed_Date.getSeconds();

    if (date_hours < 10) {
        date_hours = '0' + date_hours;
    }
    if (date_minutes < 10) {
        date_minutes = '0' + date_minutes;
    }
    if (date_seconds < 10) {
        date_seconds = '0' + date_seconds;
    }

    document.getElementById('clocko').innerHTML = ""
        + date_hours + ":" 
        + date_minutes + ":"
        + date_seconds;
}

function clocko_start() {
    clocko = setInterval(clocko_update, 999);
}

window.onload = function() {
    this.clocko_start();
}