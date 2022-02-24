//Yaciura Mariano Ejercicio 7
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let resp;
	let acum=0;
	let promedio;
	let i=0;

	do{
		numero= parseInt(prompt("Ingrese un numero"));
		acum= acum + numero;
		i++;
		resp=prompt("Ingresa otro? s/n");
	}while(resp=="s");
	
	promedio= acum/i++;
	
	document.getElementById("txtIdSuma").value= acum;
	document.getElementById("txtIdPromedio").value= promedio;

}//FIN DE LA FUNCIÓN