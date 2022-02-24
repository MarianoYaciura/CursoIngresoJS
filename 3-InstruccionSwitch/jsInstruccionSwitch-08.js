//Yaciura Mariano Ejercicio 8
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			mensaje=("Frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje=("Calor");
			break;
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN