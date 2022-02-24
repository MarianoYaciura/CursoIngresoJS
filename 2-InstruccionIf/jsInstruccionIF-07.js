//Yaciura Mariano Ejercicio 7 BIS V1
function mostrar()
{
	let edad;
	let mensaje;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad <13) {
		mensaje=("Feliz dia");
	}
		else if(edad <18){
			mensaje=("Usted es Adolescente");
		}
		if(edad==17){
			mensaje=("Usted es Adolescente"+ " Ultimo año!!!");
		}
			else if(edad >=18){
				mensaje=("Tenes edad de laburar");
			}
				 if(edad == 33){
					mensaje=("Tenes edad de laburar"+" Como cristo");
				}
				 if(edad >= 60){
					mensaje=("Tenes edad de laburar"+" A jubilarse");
				}
				 if(edad ==88){
					mensaje=("A jubilarse"+" Lindo numero");
				}
	alert(mensaje);

	}























	//tomo la edad  
/*	let edad;
	let estadoCivil;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil= document.getElementById("estadoCivil").value;

	if (edad <= 17 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
*/
	


//FIN DE LA FUNCIÓN