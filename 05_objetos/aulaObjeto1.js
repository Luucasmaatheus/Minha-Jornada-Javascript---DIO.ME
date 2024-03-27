
//Declarando objetos


const pessoa = {
    nome: `Matheus`,
    idade: 26,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)
    }

};

const atributo = `idade`;

console.log(pessoa[`nome`])