function changecolor (i)
{
    if(document.getElementById)
        document.getElementById(i).color = "green";
    else if(document)
        document[s].color = "red";
        
    return 0;
}
let name= 'Чущак Тарас';
let button2 = document.getElementById('btn2');
var ty; 
button2.onclick=()=>{
    document.title=name;
    alert(name);
}

function fib(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++) {
       var c = a + b;
       a = b;
      b = c;
    }         
   document.forms[0].write_t.value = b;
   }
   function start() {
	window.setInterval(timer, 1*1000);
}
function timer() {
	var elem = document.getElementById('test');
	elem.value = parseInt(elem.value)+1; 
}

var but = document.getElementById("right");
var timerId;
var tit = document.getElementById("title");
var colors = ["red", "blue", "green", "yellow", "purple", "orange", "brown", "gray"];
but.ondblclick = function  start() {
    timerId = setInterval("getColor()", 2000);
}
but.onclick = function stop() {
    clearInterval(timerId);
}
function getColor(){
    var color = colors[Math.floor(Math.random() * colors.length)];
    tit.style.color = color;
}
