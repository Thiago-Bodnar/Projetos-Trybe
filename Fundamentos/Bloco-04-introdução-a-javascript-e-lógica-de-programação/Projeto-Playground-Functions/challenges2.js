// Desafio 10
function techList(tech, name) {
  tech.sort();
  let techName = [];
  for (let i in tech) {
    techName.push(
      {
        tech: tech[i],
        name: name
      }
    )   
  }
  if (techName.length == 0) {
    return 'Vazio!'
   } else {
     return techName;
} 
}

  

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length < 11 || array.length > 11) {
    return "Array com tamanho incorreto."
  } 
  for (let i in array) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
}

// Desafio 12
function triangleCheck() {
 
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
