let n = 3;
let caixaDeAsteriscos = "";
let symbol = "*";
let colunas = n;
/* //Exercicio 1
for (let i = 0; i < n; i += 1) {
    caixaDeAsteriscos += "*";
}

for (let i = 0; i < n; i += 1) {
    console.log(caixaDeAsteriscos);   
}
   */

    
 /* //exercicio 2
for (i = 0; i <= n; i += 1) {
    console.log(caixaDeAsteriscos);
    caixaDeAsteriscos = caixaDeAsteriscos + symbol;
}

*/

//exercicio 3 

for (i = 0; i <= n; i += 1) {
    for (let colunaAtual = 0; colunaAtual <= n; colunaAtual += 1) {
        if (colunaAtual < colunas) {
            caixaDeAsteriscos = caixaDeAsteriscos + " ";
        } else {
            caixaDeAsteriscos =+"*"
        }
    }
    console.log(caixaDeAsteriscos);
    caixaDeAsteriscos = "";
    colunas -= 1;
}