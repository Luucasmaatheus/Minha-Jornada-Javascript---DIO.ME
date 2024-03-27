//objeto
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;


    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1 , p2) {
    if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if ((p1.idade < p2.idade)){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const lucas = new Pessoa(`Lucas`, 26);
const Kalyanne = new Pessoa(`Kalyanne`, 26);

compararPessoas(lucas, Kalyanne)