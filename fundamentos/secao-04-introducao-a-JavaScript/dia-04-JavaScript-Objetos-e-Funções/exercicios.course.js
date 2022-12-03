let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};
console.log("Bem vinda, " + info.personagem);

info.recorrente = 'Sim'

console.log(info);

for (let key in info) {
    console.log(key)
}
console.log();
for (let key in info) {
    console.log(info[key])
}
console.log();

/* juntando dois objetos */
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O Último MacPatinhas',
    recorrente: 'Sim'
}
for (let key in info2, info) {
    if (info2.recorrente === 'Sim' && info.recorrente === 'Sim') {
        info2.recorrente, info.recorrente = 'Ambos recorrentes'
    }
    console.log(info[key] + ' e ' + info2[key])
}
console.log();

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
console.log();

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
)

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + " livros favoritos")
console.log();

/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.*/

function palíndromo(palavra) {
    let reserved = palavra.split('').reverse().join("") // split.('')= torna a string em um array de substrings [o, s, s, o]
    if (palavra === reserved) {                     // reserve() = reverte o indices de uma matriz/array ou seja o ultimo indice torna o primeiro.
        return true;                                    // join('') Contatena todos os elementos em um indice só.
    }
    else {
        return false
    }
}

console.log(palíndromo('osso'));
console.log(palíndromo('arara'));
console.log(palíndromo('desenvolvimento'));
console.log();

let numbersArray = [2, 3, 6, 7, 10, 1];
function biggerNumber(numbers) {
    let higherIndex = 0;
    let number = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > number) {
            number = numbers[index];

            higherIndex = index;
        }

    }

    return higherIndex;
}

console.log(biggerNumber(numbersArray))
console.log();

numbersArray = [2, 4, 6, 7, 10, 0,-3];
function smallNumber(numbers) {
    let smallIndex = 0;
    
    for (let index in numbers) {
        if (numbers[smallIndex] > numbers[index]) {
            smallIndex = index;
       }
    }

    return smallIndex;
}

console.log(smallNumber([2, 4, 6, 7, 10, 0, -3]))
console.log();


if (true) {
    // inicio do escopo do if
    let userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
}
