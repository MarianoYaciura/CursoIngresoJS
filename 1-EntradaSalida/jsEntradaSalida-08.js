/*
Yaciura Mariano
Ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let mensajeAmostrar;

	num1= parseInt(document.getElementById("txtIdNumeroDividendo").value);
	num2= parseInt(document.getElementById("txtIdNumeroDivisor").value);
	num3= num1 / num2;
	
	mensajeAmostrar= "El resto es " + num3;

	alert(mensajeAmostrar);
}
