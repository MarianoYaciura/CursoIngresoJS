/* 
Yaciura Mariano
Ejercicio 4*/
/*
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	
	nombre= prompt("Ingresar nombre");
	
	document.getElementById("txtIdNombre").value= nombre;

}

