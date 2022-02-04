/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;

	 nombreIngresado= document.getElementById("txtIdNombre").value;
	
	let numeroIngresado;

	 numeroIngresado= document.getElementById("txtIdEdad").value;

	alert(nombreIngresado+numeroIngresado);

}

