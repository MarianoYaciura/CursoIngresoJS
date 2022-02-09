/*
Yaciura Mariano
Ejercicio 1 */
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
//function mostrar()
{
	//alert("Esto funciona de maravilla");
}

function mostrar()
{
	let nombre1;
	let nombre2;
	let nombre3;
	let num1;
	let num2;
	let num3;
	let precioBruto;
	let promedio;
	let mensajeAmostrar;
	let descuento;
	let precioFinal;
	let precioFinalConDescuento;
	nombre1= prompt("ingrese el nombre del producto 1");
	nombre2= prompt("ingrese el nombre del producto 2");
	nombre3= prompt("ingrese el nombre del producto 3");
	num1=parseInt(prompt("ingrese el precio 1"));
	num2=parseInt(prompt("ingrese el precio 2"));
	num3=parseInt(prompt("ingrese el precio 3"));
	descuento= prompt("ingrese el descuento");
	precioBruto= num1 + num2 + num3;
	promedio= precioBruto/3;
	precioFinal= (precioBruto* 0.21)+precioBruto;
	precioFinalConDescuento= precioFinal-(descuento*precioFinal/100);
	mensajeAmostrar="El precio del producto "+ nombre1 + "es" + num1 +
	". El precio del producto "+ nombre2 + "es"+ num2 + ". El precio del producto "+
	 nombre3 + "es"+ num3 + ". El precio bruto es "+ precioBruto + ". El promedio es "+
	  promedioParte + ". El precio final "+ precioFinal + ". El porcentaje de descuento es "+
	   descuento + ". El precio con descuento es "+ precioFinalConDescuento;
    alert(mensajeAmostrar);
}	