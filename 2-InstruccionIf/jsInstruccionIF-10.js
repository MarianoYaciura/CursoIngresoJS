//Yaciura Mariano Ejercicio 10
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo= 10;
	let minimo= 1;
	
	numero= Math.round(Math.random()*(maximo-minimo)+ minimo);

	if(numero >=9){
		alert(numero +" Excelente");
	}
		else if(numero >=4){
		alert(numero +" Aprobo");
	}
		else{
		alert(numero +" Vamos, la proxima se puede");
	}

	

}//FIN DE LA FUNCIÓN