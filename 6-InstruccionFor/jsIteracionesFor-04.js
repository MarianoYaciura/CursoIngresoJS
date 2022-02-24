//Yaciura Mariano - Ejercicio 4 For
//al presionar el botón repetir hasta que utilizamos 'BREAK'.
function mostrar()
{
	let i;
	let repeticiones;

	repeticiones=parseInt(prompt("Ingrese un numero"));

	for(i=0;i<=repeticiones;i++)
	{
		if(i==3){
			break;
		}
		alert(i);
	}
}//FIN DE LA FUNCIÓN