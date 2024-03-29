/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa qye receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

dados entrada:
5
50
10
98
23

saída:
98

*/

const { gets , print} = require(`./funcaoesAuxiliares.js`)

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado)
    
}

let maiorValor = 0;


for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
    
}

print(maiorValor)