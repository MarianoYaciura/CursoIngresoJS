/*
Yaciura Mariano
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num1;
	let num2;
	let mensajeAmostrar;
	
	num1=parseInt(document.getElementById("txtIdImporte").value);
	
	num2=num1*0.25;
	num3=num1-num2;

	mensajeAmostrar= "Con el descuento es " + (num3);
	
	alert(mensajeAmostrar);
}
