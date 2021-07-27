const newyears="1 Jan 2022";

var day=document.getElementById("days");
var hr=document.getElementById("hours");
var min=document.getElementById("mins");
var sec=document.getElementById("secs");


function countdown()
{
    var newyearsdate=new Date(newyears);
    var currentdate=new Date();
    var diff=new Date(newyearsdate-currentdate);
    var totalseconds=Math.floor((diff)/1000);
    var days=Math.floor(totalseconds/24/3600);
    var hours=Math.floor(totalseconds/3600)%24;
    var minutes=Math.floor(totalseconds/60)%60;
    var seconds=Math.floor(totalseconds)%60;
    day.innerHTML=days;
    hr.innerHTML=hours;
    min.innerHTML=minutes;
    sec.innerHTML=format(seconds);
    
}

function format(time)
{
    if(time<10)
    {
        return `0${time}`;
    }
    return time;
}


setInterval(countdown,1000);
