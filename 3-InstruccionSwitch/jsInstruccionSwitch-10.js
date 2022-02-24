//Yaciura Mariano Ejercicio 10
function mostrar()
{
	let estacion;
	let destino;
	let mensaje= "No se viaja";

	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
			if (destino=="Bariloche"){
				mensaje="Se viaja";
			}
			break;
		case "Verano":
			if (destino=="Mar del plata" || destino=="Cataratas"){
				mensaje="Se viaja";
			}
			break;
		case "Primavera":
			if(destino!="Bariloche"){
				mensaje="Se viaja";
			}
			break;
		case "Otoño":
			mensaje="Se viaja";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN