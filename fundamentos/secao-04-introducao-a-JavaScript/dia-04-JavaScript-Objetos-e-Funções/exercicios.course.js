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

console.log(leitor.nome+ ' tem ' + leitor.livrosFavoritos.length + " livros favoritos")
