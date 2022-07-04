const btn = document.getElementById('btn');
let inp = document.getElementById('input');
inp.addEventListener('blur', timeFn);

function timeFn(){
let time = document.getElementById('input').value;
let inputTime = new Date(time);
console.log(inputTime);
let currentTime = new Date();
console.log(currentTime)
let finalTime = currentTime - inputTime;
console.log(finalTime)
let second = Math.round(finalTime/1000) ;
let minute = Math.round(finalTime/60000) ;
let hours = Math.round(finalTime/3600000) ;
let days = Math.round(finalTime/86400000) ;
console.log(days,hours,minute,second, "acs")
if(second<30){
    document.getElementById('time').innerText = second + "Sec Ago"
}
if(second>30){
    document.getElementById('time').innerText = minute + "Min Ago"
}
 if(hours>0 && minute>59){
    document.getElementById('time').innerText = hours + "Hour Ago"
}
 if(days>0){
    document.getElementById('time').innerText = days + "Day Ago"
}
}