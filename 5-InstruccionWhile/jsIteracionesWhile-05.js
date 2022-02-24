//Yaciura Mariano Ejercicio 5
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	do{
		sexoIngresado = prompt("ingrese f ó m .");
	}while(sexoIngresado!= "f" && sexoIngresado!= "m");

	document.getElementById("txtIdSexo").value = "Sexo validado es correcto";

}//FIN DE LA FUNCIÓN