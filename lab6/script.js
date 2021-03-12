let mas;

function eventForm4(value){
   mas = value;
}
Number.prototype.toDivide = function() {
  var int = String(Math.trunc(this));
  if(int.length <= 3) return int;
  var space = 0;
  var number = '';

  for(var i = int.length - 1; i >= 0; i--) {
    if(space == 3) {
      number = '_' + number;
      space = 0;
    }
    number = int.charAt(i) + number;
    space++;
  }

  return number;
}
function oneClick4(){
  let a = mas.replace( /\s/g, "");
  let p =document.getElementById("result1");
  let n1 = a.match(/\d+/g).map(Number);
  let b = a.split(n1[0]);
  alert(b);
  n1[0] =n1[0].toDivide()
  alert(n1[0]);
  let c = b[1].split(n1[1]);
  alert(c);
  n1[1] = n1[1].toDivide()
  alert(n1[1]);
  let resultat = b[0]+n1[0]+c[0]+n1[1];
  p.innerHTML = resultat;
}


function deleteA(){
var val = document.getElementById('vvid').value;
var find = val.match(/a[0-9]+a/ig);
document.getElementById('texts').innerHTML= find.join("</br>");
}


let input1=document.getElementById('input1');
let button1=document.getElementById('button1');
let patt = new RegExp("([a-zA-Z0-9\\s_\\\\.\\-\\(\\):])+(.txt|.html|.php)");

button1.onclick=(ev)=>{
    task1();
    ev.preventDefault();
}

function task1(){
    let res = patt.test(input1.value);
    if(res){
        alert('Введено правильне розширення')
    }else{
        alert('Введено помилкове розширення')
    }
}

function domen(){
    var reg = /aaa$/g;
    var array1 = document.getElementById('t3').value; 
    var new_str = array1.replace(reg,'!');
    document.getElementById('a3').innerHTML = new_str;
}


function checkEmail() {
    var email = document.getElementById('txtEmail');
     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        email.style.backgroundColor = "red";
        return false;
    }else{
      alert('Email is correct');
      email.style.backgroundColor = "green";
      return true;
    }
}