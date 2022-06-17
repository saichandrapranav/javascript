// var p = document.querySelector('.myP');
// var p = document.getElementsByClassName('myP');


// p.innerHTML = "I am JS";
// p.value = "I am also JS";

// p.addEventListener('click',function () {
//     p.style.color = "red";
// })

// setTimeout, setInterval

// setInterval(function () {
//     alert("Hello");
// },3000);

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var h = 10, m = 1, s = 30;

setInterval(function (){
    s=s-1
    if(s==0){
        s=59;
        m=m-1;
    }
    else if(m==0){
        m=59;
        h=h-1;
    }
    else if(h==0){
        alert("sale started!");
    }
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
},1000)