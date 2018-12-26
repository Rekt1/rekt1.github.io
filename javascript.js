var myVar = setInterval(myTimer, 1000); // Часы на главной страницу
function myTimer() {
	var d = new Date();
	document.getElementById('date').innerHTML = d.toLocaleTimeString();
}

function myAlert() { // alert с сообщением
	alert("Тестовая страница! n/ Test page")
}
