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
let imagem = document.createElement("img");
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
document.querySelector(".left-content").appendChild(imagem);
let numeros = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez'
];

let ondeVaiLista = document.querySelector(".right-content");

for (let i in numeros) {
    let indiceDaLista = document.createElement('li');
    let numeroAtual = numeros[i];
    indiceDaLista.innerText = numeroAtual;

    ondeVaiLista.appendChild(indiceDaLista);
}
for (let n = 0; n < 3; n += 1) {
    let criaHDois = document.createElement('h2');
    main.appendChild(criaHDois);

}

