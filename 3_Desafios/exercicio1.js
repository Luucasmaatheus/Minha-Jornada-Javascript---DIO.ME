// 1- Faça um algorítmo que dado as 3 notas retiras por um aluno em um semestre da faculdade calcule e imprima 
// a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
//     - Média menor que 5, reprovação;
//     - Média entre 5 e 7, recuperação;
//     - Média acima de 7, passou de semestre;


// let nota1 = 10;
// let nota2 = 9;
// let nota3 = 7;
// let mediaAluno = (nota1 + nota2 + nota3) / 3;


// if(5 > mediaAluno){
//     console.log(`reprovado`)
// } else if(mediaAluno >= 5 &&  mediaAluno < 7 ) {
//     console.log(`recuperação`)
// } else if(mediaAluno > 7){
//     console.log(`Passou de semestre`)

// }


let nota1 = 7;
let nota2 = 10;
let nota3 = 100;
let mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno < 5) {
    console.log('Reprovado');
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log('Recuperação');
} else if (mediaAluno >= 7) {
    console.log('Passou de semestre');
}
