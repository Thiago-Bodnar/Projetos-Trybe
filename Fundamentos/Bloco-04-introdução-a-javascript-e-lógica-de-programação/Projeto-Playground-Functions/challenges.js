// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
return string.split(' ', string.length)
}

// Desafio 4
function concatName(array) {
  let ultimoItemPrimeiroItem = array[array.length - 1] + ', ' + array[0];
  return ultimoItemPrimeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties *1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let vezesMaiorNumero = 0;
  for (let i = 0; i < array.length; i += 1) { 
    if (array[i] === Math.max.apply(Math, array)) {
      vezesMaiorNumero += 1;
    }
  }
    return vezesMaiorNumero;
}


// Desafio 7
// Desafio realizado com a ajuda via Slack dos colegas: Thiago Dos Santos, Gabriel Melo e Vinicius Gomes.
function catAndMouse(mouse, cat1, cat2) {
let diferencaCat1 = Math.abs(cat1 - mouse);
let diferencaCat2 = Math.abs(cat2 - mouse);

  if (diferencaCat1 < diferencaCat2) {
    return 'cat1';

  } else if (diferencaCat2 < diferencaCat1 ){
  return 'cat2';
  
} else if (diferencaCat1 == diferencaCat2) {
  return 'os gatos trombam e o rato foge';
}
    
}

// Desafio 8
function fizzBuzz(array) {
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 == 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 == 0) {
      array[i] = 'buzz';
    } else if (array[i] % 3 == 0) {
      array[i] = 'fizz';
    } else {
     array[i] = 'bug!';
      
    }
  }
  return array; 
}

// Desafio 9
function encode(string) {
  let stringCodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 'a') {
      stringCodificada += 1;
    } else if (string[i] == 'e') {
      stringCodificada += 2;
  } else if (string[i] == 'i') {
    stringCodificada += 3;
} else if (string[i] == 'o') {
  stringCodificada += 4;
 } else if (string[i] == 'u') {
  stringCodificada += 5;
 } else {
   stringCodificada += string[i];
 }
  
}
 return stringCodificada;
}
function decode(stringCodificada) {
  let stringDecodificada = '';

  for (let n = 0; n < stringCodificada.length; n += 1) {
    if  (stringCodificada[n] == 1)  {
      stringDecodificada += 'a';
    } else if (stringCodificada[n] == 2)  {
      stringDecodificada += 'e';
    } else if (stringCodificada[n] == 3)  {
      stringDecodificada += 'i';
    } else if (stringCodificada[n] == 4)  {
      stringDecodificada += 'o';
    } else if (stringCodificada[n] == 5)  {
      stringDecodificada += 'u';
    } else {
      stringDecodificada += stringCodificada[n];
    }
  }
      return stringDecodificada;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
