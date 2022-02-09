/*
Yaciura Mariano
Ejercicio 7*/
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
    let mensajeAmostrar;

	numero1=  parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2=  parseInt(document.getElementById("txtIdNumeroDos").value);
	
    numero3= numero1 + numero2;
	
	mensajeAmostrar= "La suma es " + numero3;

	alert(mensajeAmostrar);	
}

function restar()
{
	let numero1;
	let numero2;
    let mensajeAmostrar;

	numero1=  parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2=  parseInt(document.getElementById("txtIdNumeroDos").value);
	
    numero3= numero1 - numero2;
	
	mensajeAmostrar= "La resta es " + numero3;

	alert(mensajeAmostrar)
}

function multiplicar()
{ 
	let numero1;
	let numero2;
    let mensajeAmostrar;

	numero1=  parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2=  parseInt(document.getElementById("txtIdNumeroDos").value);
	
    numero3= numero1 * numero2;
	
	mensajeAmostrar= "La multiplicacion es " + numero3;

	alert(mensajeAmostrar)	
}

function dividir()
{
	let numero1;
	let numero2;
    let mensajeAmostrar;

	numero1=  parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2=  parseInt(document.getElementById("txtIdNumeroDos").value);
	
    numero3= numero1 / numero2;
	
	mensajeAmostrar= "La division es " + numero3;

	alert(mensajeAmostrar)	
}

