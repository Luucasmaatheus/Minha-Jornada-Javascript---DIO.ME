//Classes é a definição do que deve ser o obejto
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

//instancias - são ocorrencias do objeto
const lucas = new Pessoa(); 
lucas.nome = `Lucas Matheus`
lucas.idade = 26;

const Kalyanne = new Pessoa();
Kalyanne.nome = `Kalyanne`
Kalyanne.idade = 22;


lucas.descrever();
Kalyanne.descrever();