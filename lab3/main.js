let a = "Screen-colorDepth: " + screen.colorDepth;
alert(a);

let h = "History-length: " + history.length;
alert(h);

let n = "Navigator: " + navigator.appName + " " + navigator.appVersion;
alert(n);



var myWindow;
function openWindow(){
    myWindow = window.open("https://lpnu.ua/","","width=500px,height=200px");
}
function closeWindow(){
    myWindow.close();
}

if(confirm("Чи приховати всі вікна div.hide?")){
    document.getElementById('text').hidden = true;
}
else{
    alert("Відмова користувача!");
}

alert("ввести адресу сторінку у інтернеті")
document.getElementById('site')
 window.open("https://www.google.com/webhp?authuser=1");
