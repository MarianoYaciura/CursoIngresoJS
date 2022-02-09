/*
Yaciura Mariano
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let num1;
    let num2;
	let mensajeAmostrar;

    num1= parseInt(document.getElementById("txtIdSueldo").value);
    num2= num1 * 1.1;

    mensajeAmostrar= "Con el aumento es " + num2;
	
	alert(mensajeAmostrar);
}
