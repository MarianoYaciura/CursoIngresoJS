/*
Yaciura Mariano
Ejercicio 5*/
/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
    let numeroIngresado;

	 nombreIngresado= document.getElementById("txtIdNombre").value;
	 numeroIngresado= document.getElementById("txtIdEdad").value;

	 mensajeAMostrar= "Usted se llama " + nombreIngresado + " y tiene " + numeroIngresado + " edad";
	
	 alert(mensajeAMostrar);

}

