//Yaciura Mariano - Ejercicio 7 For
/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	let i=1;
	let numero;
	let divisores=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=1;i<=numero;i++)
	{
		if(numero%i==0){
			alert(i);
			divisores++;
		}
		
	}
	alert("La cantidad de divisores es: " + divisores);
}//FIN DE LA FUNCIÓN