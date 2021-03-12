function outputDescending(){

	var p = document.getElementById('columnOutput');
	var N = parseInt(document.getElementById('inputNtask_4').value);
	var str = ''
	for (var i = N; i >= 0; i--) {
		str += i + '<br>';
	}

	p.innerHTML = str;
	
}

//Task 13
function text_10(){
    let all_text = document.getElementById("input_text").value;
    let text_arr = all_text.split(',');
    let numb_arr = [];
    let text = "";
    for (var i = 0; i < text_arr.length; i++) {
      let numb = parseFloat(text_arr[i]);
      if (!(isNaN(numb))) {
          if(numb > 10){
            numb_arr.push(numb);
          }
      }
    }
    if(numb_arr.length != 0){
      for (var i = 0; i < numb_arr.length; i++) {
        text = text + " " + numb_arr[i];
      }
      document.getElementById("text_10").append(text);
    }
    else {
      document.getElementById("text_10").append("Таких елементів немає");
    }
}

function mas(){

	var arr = document.getElementById('1').value.split(',');
  var arr2 = document.getElementById('2').value.split(',');
  var arr3 = [];

for (i=0; i < arr.length; i++) {
	arr3.push(arr[i]+arr2[i]);
}

alert(arr3);
}




function doubleArray(){
	var array = document.getElementById('row1').value.split(',');
	// Подвоєння масиву
	array = array.concat(array);
	var p = document.getElementById('doubledArrayOutput');
	p.innerHTML += array.toString();
}


function countDigits(){

	var p = document.getElementById('demo');
	var elements = document.getElementById('ro1').value.split(',');

	let summ = 0;
	for (var i = 0; i < elements.length; i++) {
		let checker = isNumeric(elements[i]);
    summ += elements[i];
		if(checker){
		summ++;
		}
	}
	p.innerHTML = 'Сума введених цифр: ' + summ;
	array=array.concat(elements);
  
}
function isNumeric(s) {

  return !isNaN(s - parseFloat(s));
}

