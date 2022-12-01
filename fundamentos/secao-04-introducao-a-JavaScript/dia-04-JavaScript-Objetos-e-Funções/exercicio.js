
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: {
        datas: [2006, 2007, 2008, 2009, 2010, 2018]
    }
};

console.log("A jogadora " + player['name'] + ' ' + player.lastName + ' ' + player.age + ' de idade. ');

console.log(player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld']['datas'].length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

/* exercicios for in */

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log('Olá ' + names[key]);
}


let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key])
}

console.log();

/* exercicio function */
let a = 55;
let b = 10;

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}
console.log(subtraction(a, b), + sum(a, b), + multiplication(a, b), + division(a, b), + modulus(a, b));

/* Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.*/
function bigger(a, b) {
    if (a > b) {
        return "A é maior que B"
    } else if (b > a) {
        return "B é maior que A"
    }
    else {
        return "A e B são iguais"
    }
}
console.log(bigger(a, b));
console.log();
/* Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.*/
a = 25;
b = 55;
let c = 85;
function numberBigger(a, b, c) {
    if (a > b && a > c) {
        return "A é maior que B e C"
    } else if (b > a && b > c) {
        return "B é maior que A e C"
    }
    else if (c > a && c > b) {
        return "C e maior e A e B"
    }
    else {
        return 'A, B e C são iguais.'
    }
}
console.log(numberBigger(a, b, c));
console.log();

/* Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/
let number1 = -2;

function positiveOrNegative(number1) {
    if (number1 > 0) {
        return "Number Positive"
    } else if (number1 < 0) {
        return "Number Negative"
    }
    else {
        return "Number is zero"
    }

}
console.log(positiveOrNegative(number1));
console.log();

let angles = {
    x: 90,
    y: 30,
    z: 60
}
function triangle(angle) {
    let sumTriangle = angle.x + angle.y + angle.z
    if (sumTriangle === 180) {
        return 'true';
    }
    else if (sumTriangle > 180 && angle.x > 0 && angle.y > 0 && angle.z > 0) {
        return 'false';
    }
    else if (angle.x < 0 || angle.y < 0 || angle.z) {
        return 'Angle invalid '
    }
}
console.log(triangle(angles));
