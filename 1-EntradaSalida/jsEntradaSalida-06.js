/*
Yaciura Mariano
Ejercicio 6*/
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

