const prompt = require("prompt-sync")();

let numero = Number(prompt("Ingrese un numero entero postivo: "))

while(isNaN(numero)) {
    console.log("Error: debe ingresar un número.");
    numero = Number(prompt("Ingrese un numero entero postivo: "));
}

function factorialNumero() {
    if(numero == 0 || numero == 1) {
        console.log(`Factorial de ${numero}! = 1`);
        return 1
    }

    let factorial = 1
    let secuencia = '';
    for(let i = 1; i <= numero; i++) {
        factorial *= i;
        secuencia += i;
        if (i < numero) {
            secuencia += ' x '; 
        }
    }
    console.log(`Factorial de ${numero}! = ${secuencia} = ${factorial}`);
    return factorial;
}

factorialNumero()