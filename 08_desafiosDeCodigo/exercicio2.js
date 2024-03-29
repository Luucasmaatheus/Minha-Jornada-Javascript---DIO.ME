
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoesExercicio2');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroimpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if(numero % 2 === 0){
        if (numero >= maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if(menorNumeroimpar === 0){
            menorNumeroimpar = numero;
        }else if(numero < menorNumeroimpar){
            menorNumeroimpar = numero;
        }


    }
}

print(`Maior número par: ` + maiorNumeroPar);
print(`Menor número impar: ` + menorNumeroimpar);
