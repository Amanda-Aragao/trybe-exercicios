/*Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:
Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.*/

let number = 5;
for (let index = 0; index < number; index += 1) {    /* linha */
    let asteriscos = '';
    for (let index = 1; index <= number; index += 1) { /* coluna */
        asteriscos += "*";
    }

    console.log(asteriscos);
}

console.log();

/*Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */

let number1 = 5;
let asteriscos = '';
for (let index = 0; index < number1; index += 1) {
    asteriscos += "*";

    console.log(asteriscos);
}

console.log();

/* Agora inverta o lado do triângulo.*/
let inputLine = '';
let symbol= '*';
let inputPosition = number1 -1;


for (let index = 0; index < number1; index += 1) {
    for (let index2 = 0; index2 < number1; index2 += 1) {
        
        if (index2 < inputPosition) {
        
            inputLine = inputLine + ' '; 
        }
        
        else{
            inputLine = inputLine + symbol;
        }
    }

    console.log(inputLine);
    inputLine = '';
    inputPosition -=1;
}
let middlOfPosition = (number1 + 1) /2;
let positionRight = middlOfPosition;
let positionLeft = middlOfPosition;

for (let indexLine = 0; indexLine < 3; indexLine += 1) {
    for (let indexColum = 0; indexColum < number1; index2 += 1) {
        
        if (indexColum > positionLeft && indexColum < positionRight) {
        
            inputLine = inputLine + ' '; 
        }
        
        else{
            inputLine = inputLine + symbol;
        }
    }

    console.log(inputLine);
    positionLeft -=1
    positionRight +=1;
}