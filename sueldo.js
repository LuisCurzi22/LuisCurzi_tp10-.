let nombre ="Fulano";
let apellido ="Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;


function calculoAumento (){
    var calculoAumento= sueldoActual * porcentajeAumento / 100;
    return calculoAumento
}
let NuevoSueldo = calculoAumento() + sueldoActual;

console.log("Hola, estimad@ " + nombre + apellido)
console.log("En base a su sueldo actual: $" + sueldoActual)
console.log("Ha recibido un aumento del 25% :" + calculoAumento())
console.log("Su sueldo con el aumento nuevo es: " + NuevoSueldo)