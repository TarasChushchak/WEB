var p1 = document.getElementById('p1');
var in1 = document.getElementById('in1');

in1.onkeydown = function(event){
    if(event.keyCode == 13){
        var in2 = in1.value;
        console.log(in2);
        p1.innerHTML = in2;
        document.getElementById('in1').value = '';
    }
}

var p2 = document.getElementById('p2');

function lastLetter(event){
    p2.innerHTML = ("Символ: " + String.fromCharCode(event.which));
} 