//Yaciura Mariano Ejercicio 5
function mostrar()
{
	//tomo la edad  
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 || edad > 17){
		alert("Felicidades usted NO es un adolescente")
	}

}//FIN DE LA FUNCIÓN