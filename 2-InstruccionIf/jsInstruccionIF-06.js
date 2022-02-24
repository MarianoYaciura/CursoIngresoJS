//Yaciura Mariano Ejercicio 6
function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad<=17){
		alert("Felicidades usted es un adolescente");
	}
		else
	if(edad >= 18){
		alert("Felicidades usted es mayor de edad");
	}
		else
	if(edad <= 12){
		alert("Felicidades usted es un preadolescente");
	}


}//FIN DE LA FUNCIÓN