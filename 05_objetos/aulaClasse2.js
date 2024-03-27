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
//instancias
const lucas = new Pessoa(`Lucas`, 27); 
const Kalyanne = new Pessoa(`Kalyanne`, 22);

console.log(lucas)