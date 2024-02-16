var num1;
var num2;
var resultado;

function sumar() {
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	resultado = (+num1 + +num2);
	console.log(resultado);
	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = 'Resultado=' + resultado;
}

function restar() {
        var num1Element = document.getElementById("num1");
        var num2Element = document.getElementById("num2");
        num1 = num1Element.value;
        num2 = num2Element.value;
        resultado = (+num1 - +num2);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado=' + resultado;

}

function multiplicar() {
        var num1Element = document.getElementById("num1");
        var num2Element = document.getElementById("num2");
        num1 = num1Element.value;
        num2 = num2Element.value;
        resultado = (+num1 * +num2);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado=' + resultado;

}

function dividir() {
        var num1Element = document.getElementById("num1");
        var num2Element = document.getElementById("num2");
        num1 = num1Element.value;
        num2 = num2Element.value;
        resultado = (num1/num2);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado=' + resultado;

}

function square() {
        var num1Element = document.getElementById("num1");
        num1 = num1Element.value;
        resultado = (num1*num1);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado del primer numero=' + resultado;

}

function sqrt() {
        var num1Element = document.getElementById("num1");
        num1 = num1Element.value;
        resultado = Math.sqrt(num1);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado del primer numero=' + resultado;

}

function power() {
        var num1Element = document.getElementById("num1");
        var num2Element = document.getElementById("num2");

	num1 = num1Element.value;
	num2 = num2Element.value;

        resultado = Math.pow(num1,num2);
        console.log(resultado);
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'Resultado del primer numero=' + resultado;

}




