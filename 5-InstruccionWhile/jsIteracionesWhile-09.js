//Yaciura Mariano Ejercicio 9
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let resp= "s";
	
	numero=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero) == true){
		numero= parseInt(prompt("Ingrese un NUMERO"));
	}
	minimo=numero;
	maximo=numero;
	
	resp= prompt("Desea ingresar otro? s/n");

	while(resp=="s"){
		numero= parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero) == true){
			numero= parseInt(prompt("Ingrese un NUMERO"));
		}
			if(numero>maximo){
			maximo= numero;
			}
			else if(numero<minimo){
			minimo= numero;
			}
			resp=prompt("Desea ingresar otro? s/n");
	}

	document.getElementById("txtIdMaximo").value= maximo
	document.getElementById("txtIdMinimo").value= minimo

}//FIN DE LA FUNCIÓN