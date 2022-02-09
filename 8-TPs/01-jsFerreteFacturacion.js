/*
Yaciura Mariano
TP1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1;
    let num2;
    let num3;
    let sumaDeLosMismos;
    let resultado;

        num1=parseInt(document.getElementById("txtIdPrecioUno").value);
        num2=parseInt(document.getElementById("txtIdPrecioDos").value);
        num3=parseInt(document.getElementById("txtIdPrecioTres").value);
    
            sumaDeLosMismos= num1 + num2 + num3;
            resultado= "El resultado es "+ sumaDeLosMismos;
    
            alert(resultado);
}
function Promedio () 
{
    let num1;
    let num2;
    let num3;
    let promedio;
    let resultado;

        num1=parseInt(document.getElementById("txtIdPrecioUno").value);
        num2=parseInt(document.getElementById("txtIdPrecioDos").value);
        num3=parseInt(document.getElementById("txtIdPrecioTres").value);

            promedio= (num1 + num2 + num3)/3;
            resultado= "El promedio es "+ promedio;
            
            alert(resultado);

}
function PrecioFinal () 
{
	let num1;
    let num2;
    let num3;
    let precioFinal;
    let Iva;
    let resultado;

        num1=parseInt(document.getElementById("txtIdPrecioUno").value);
        num2=parseInt(document.getElementById("txtIdPrecioDos").value);
        num3=parseInt(document.getElementById("txtIdPrecioTres").value);

            Iva= (num1+num2+num3)*1.21;
            precioFinal= (num1+num2+num3)+Iva;
            resultado= "El precio final es "+ precioFinal;
            
            alert(resultado);
}