//Yaciura Mariano Ejercicio 1
function mostrar()
{
	let nombre= prompt("Ingrese su nombre");
	let altura= parseInt(prompt("Ingrese su altura"));
	let peso= parseInt(prompt("Ingrese su peso"));
	let imc=peso/altura*altura;
	let mensaje;

	if(imc<18.5){
		mensaje="Bajo peso";
	}
	else if(imc<=24.9){
		mensaje="Peso normal";
	}
	else if(imc<=26.9){
		mensaje="Pre obesidad";
	}
	else if(imc<=29.9){
		mensaje= "Obesidad";
	}
	else if(imc<=34.9){
		mensaje= "Obesidad 2";
	}
	else{
		mensaje= "Obesidad 3";
	}
	alert(nombre +" Su IMC es de "+mensaje);

}



/*{
	let velocidad;
	let mensaje;
	let distancia= parseInt(prompt("Ingrese la distancia recorrida"));
	let tiempo=parseInt(prompt("Ingrese el tiempo que tardo"));

	velocidad= distancia/tiempo;

	if(velocidad == 60){
		mensaje="Muy lento";
	}
	else if(velocidad<=80){
		mensaje="Lento";
	}
	else if(velocidad<=100){
		mensaje="Buen ritmo";
	}
	else if(velocidad<=120){
		mensaje= "Ahi de la ley";
	}
	else{
		mensaje= "Eso no se hace";
	}
	alert(mensaje);

}*/
	//tomo la edad  
/*	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	if(edad == 15 ){
		alert("Nina Bonita");
	}

}
//FIN DE LA FUNCIÓN*/