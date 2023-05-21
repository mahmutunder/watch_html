setInterval(timer, 1000);

var hourHand=document.querySelector("#hour")
var minuteHand=document.querySelector("[data-minute-hand]")
var secondHand=document.querySelector("#second")

function setRotation(element, rotattionRatio){
    element.style.setProperty("--rotation", rotattionRatio*360)

}

function timer(){
    var currentDate= new Date();
    var currentSecand=currentDate.getSeconds()/60;
    var currentMinute=(currentSecand+currentDate.getMinutes())/60;
    var currentHour=(currentMinute+currentDate.getHours())/12;
    setRotation(minuteHand,currentMinute)
    setRotation(secondHand, currentSecand)
    setRotation(hourHand, currentHour);
}
timer();