function task1(){
	var number = parseFloat(document.getElementById("task1-input-num").value) + "";
	var number_length = parseFloat(document.getElementById("task1-input-len").value);

	if (number.length >= number_length){
		alert("Довжина числа більша або рівна, ніж його майбутня довжина");
		return;
	}

	if (isNaN(parseFloat(number))){
		alert("Лише числа!");
		return;
	}

	while (number.length < number_length){
		number = "0" + number;
	}

	document.getElementById("task1-input-num").value = number;
}

function task2(){
	var curdate = new Date();
	var amount = new Date(curdate.getFullYear(), curdate.getMonth()+1, 0).getDate();
	alert(`В поточному місяці ${amount} днів`);
}

function task3(){
	var data = document.getElementById("task3-input").value.split(",");
	var square = parseFloat(data[0]) * parseFloat(data[1]);

	alert(`Площа прямокутника: ${square}`);
}