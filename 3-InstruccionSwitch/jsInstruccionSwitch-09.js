//Yaciura Mariano Ejercicio 9
function mostrar()
{
	let estacionIngresada;
	let destino;
	const PRECIO=15000;
	let porcentaje20= PRECIO*20/ 100;
	let porcentaje10= PRECIO*10/ 100;
	let precioFinal;

	estacionIngresada= document.getElementById("txtIdEstacion").value;
	destino= document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case"Invierno":
			switch(destino){
				case"Bariloche":
					precioFinal= PRECIO+porcentaje20;
					alert("El precio es de "+ precioFinal);
				break;
				case"Cataratas":
				case"Cordoba":
					precioFinal= PRECIO+porcentaje10;
					alert("El precio es de "+precioFinal);
				break;
				case"Mar del plata":
					precioFinal= PRECIO-porcentaje20;
					alert("El precio es de "+precioFinal);
				break;
			}
			break;	
		case"Verano":
			switch(destino){
				case"Bariloche":
					precioFinal= PRECIO-porcentaje20;
					alert("El precio es de "+precioFinal);
				break;
				case"Cataratas":
				case"Cordoba":
					precioFinal= PRECIO+porcentaje10;
					alert("El precio es de "+precioFinal);
				break;
				case"Mar del plata":
					precioFinal= PRECIO+porcentaje20;
					alert("El precio es de "+ precioFinal);
				break;
			}
			break;
		case"Otoño":
		case"Primavera":
			switch(destino){
				case"Bariloche":
				case"Cataratas":
				case"Mar del plata":
					precioFinal= PRECIO+porcentaje10;
					alert("El precio es de "+precioFinal);
				break;
				case"Cordoba":
					precioFinal= PRECIO;
					alert("El precio es de "+precioFinal);
				break;
			}
			break;
	}
}

//FIN DE LA FUNCIÓN