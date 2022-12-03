
// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

console.log('Olá ${age}!')

function hello() {
    let saudacoes = ["Hello World!", "Olá Mundo!"];
    console.log(saudacoes[0]);


}

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        console.log('Idade dentro do for:', idade)
    }
}
imprimeIdade()


let pessoa = {
    nome: 'Danilo',
    idade: 26
}
pessoa = {
    nome: 'Amanda',
    idade: 27
}

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

console.log();

let = favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${name} ${lastName}! `);

function soma(a, b) {
    let resultado = a + b;
    return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de  ${a} e ${b} é ${soma(a, b)}`
)
/* 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

🚀 Transforme a função numeroAleatorio em uma arrow function; */

numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

/* 🚀 Transforme a função hello em uma arrow function; */
hello = (nome) => `Olá, ${nome}!`

let nome = 'Ivan';
console.log(hello(nome));

let speed = 200;
const speedCar = (speed) => {
    const trueTest = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
    return trueTest;
}
console.log(speedCar(speed));

/*Crie uma função que ligue e desligue um motor de um carro.
Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.*/

let status = 'desligado';

const ligarDesligar = () => (
    status === 'desligado' ? status = 'ligado' : status = 'desligado'
)

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado


/* 
🚀 Crie uma função que calcule a área de um círculo.

Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

Com base nessa informação:

Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

Crie a lógica para retornar a área do círculo;

Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).*/

circleArea = (raio) => {
    const PI = 3.141592653;
    let area = PI * Math.pow(raio, 2);
    return area;
}
console.log(`Essa é a area do círculo: ${circleArea(5).toFixed(2)} `);

// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (phares) => {
    const arrayWords = phares.split(' ');
    let maxWord = 0;
    let result = '';
    for (const word of arrayWords) {
        if (word.length > maxWord) {
            maxWord = word.length;
            result = word;
        }
    }

    return result;
}
let phares = 'Antonio foi ao banheiro e não sabemos o que aconteceu';
console.log(longestWord(phares));