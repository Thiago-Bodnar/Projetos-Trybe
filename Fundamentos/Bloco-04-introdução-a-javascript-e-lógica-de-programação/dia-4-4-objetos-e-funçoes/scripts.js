// exercicio 1 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    infoDois: {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: "Sim",
    }
  };
 // console.log('Bem vinda ' + info.personagem);
  
// exercicio 2

info.recorrente = "sim";

// console.log(info.recorrente);

// exercicio 3

// for (let key in info) {
//    console.log(key);
// }

// exercicio 4 

// for (let key in info) {
//    console.log(info[key]);
// }

// exercicio 5

/*
for (let key in info) {
    console.log(info[key]);
 }

*/

// exercicio 6

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

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos['titulo']);

