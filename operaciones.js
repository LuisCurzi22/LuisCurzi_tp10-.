let num1 = 15
let num2 = 20

function suma(){
    let resultado = num1 + num2;
    return resultado
}
let rdosuma = suma( 15 + 20)
console.log("El resultado es = " + rdosuma)


function resta(num1, num2){
    let resultado = 15 - 20;
    return resultado
}
let rdoresta = resta( 15 - 20)
console.log("El resultado es = " + rdoresta)

function multiplicacion(num1, num2){
    let resultado = 15 * 20;
    return resultado
}
let rdomultiplicacion = multiplicacion( 15 * 20)
console.log("El resultado es = " + rdomultiplicacion)

function división(num1, num2){
    let resultado = 15 / 20;
    return resultado
}
let rdodivisión = división( 15 / 20)
console.log("El resultado es = " + rdodivisión)

function módulo(num1, num2){
    let resultado = 15 % 20;
    return resultado
}
let rdomódulo = módulo( 15 % 20)
console.log("El resultado es = " + rdomódulo)

if(num1>num2){
    console.log("El num1 es mayor a 20");
}
else{
    console.log("El num1 es menor a 20");
}