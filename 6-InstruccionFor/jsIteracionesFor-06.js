//Yaciura Mariano - Ejercicio 6 For
/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, y 
mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	let i=1;
	let numero;
	let pares=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=1;i<numero;i++)
	{
		if(i%2==0){
			alert(i);
			pares++;
		}
		
	}
	alert("La cantidad de Pares es: " + pares);
}//FIN DE LA FUNCIÓN