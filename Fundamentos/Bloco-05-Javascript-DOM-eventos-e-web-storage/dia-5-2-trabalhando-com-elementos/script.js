let titulo = document.createElement('h1');
titulo.innerText = 'Exercícios 5-2 Trabalhando Com Elementos';
document.body.appendChild(titulo);
let main = document.createElement('main');
main.className = "main-content"
let body = document.body;
body.appendChild(main);
let section = document.createElement('section');
section.className = 'center-content';
document.querySelector(".main-content").appendChild(section);
let texto = document.createElement("p");
texto.innerText = 'Fazendo os exercícios do dia 5-2'
section.appendChild(texto);
let sectionDois = document.createElement('section');
let sectionTres = document.createElement('section');
sectionDois.className = "left-content"
sectionTres.className = 'right-content'
main.appendChild(sectionDois);
main.appendChild(sectionTres);
