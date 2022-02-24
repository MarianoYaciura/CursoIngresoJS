//Yaciura Mariano Ejercicio 8
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let resp="s";
	let sumaPositivos=0;
	let productosNegativos=1;
	
	while(resp=="s"){
		numero= parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)== true){
			numero= parseInt(prompt("Ingrese un NUMERO"));
		}

		if(numero>=0){
			sumaPositivos= sumaPositivos+ numero;
		}
		else{
			productosNegativos=productosNegativos*numero;
		}

		resp=prompt("Ingresa otro? s/n");
	}

	document.getElementById("txtIdSuma").value= sumaPositivos;
	document.getElementById("txtIdProducto").value= productosNegativos;
}//FIN DE LA FUNCIÓN