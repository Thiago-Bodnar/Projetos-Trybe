const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// Exercicio 1:

const expectedResult = [
  //   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  //   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  //   'Fundação - Ficção Científica - Isaac Asimov',
  //   'Duna - Ficção Científica - Frank Herbert',
  //   'A Coisa - Terror - Stephen King',
  //   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

// const formatedBookNames = (bookList) => bookList.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(formatedBookNames(books));

// Exercício 2:

// const nameAndAge = (bookList) => bookList.map((book , index) => (
//   {
//     ['Age']: book.releaseYear - book.author.birthYear,

//     ['Author']: book.author.name
//   })
// );


// const nameAndAgeArray = nameAndAge(books);


// console.log(nameAndAgeArray.sort((a, b) => a.Age < b.Age ? -1 : a.Age > b.Age ? 1 : 0));

// Exercício 3:

const fantasyOrFiccion = (bookList) => bookList.filter((book) => {
  return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
});

// console.log(fantasyOrFiccion(books));

// Exercício 4:

const oldBooks = (bookList) => bookList.filter((book) => {
  return 2022 - book.releaseYear > 60;
}); 

// const oldBooksOrdered = oldBooks(books).sort((a, b) => b.releaseYear < a.releaseYear ? 1 : b.releaseYear > a.releaseYear ? -1 : 0);

// console.log(oldBooksOrdered);

// Exercício 5:

const fantasyOrFiccionNames = fantasyOrFiccion(books).filter((book) => `${book.name}`);

console.log(fantasyOrFiccionNames);