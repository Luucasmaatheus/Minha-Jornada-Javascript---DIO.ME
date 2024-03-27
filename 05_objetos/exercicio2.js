//orientação a objetos

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcualrImc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarImc(){
        const imc = this.calcualrImc()
        if(imc < 18.5){
            return (`Abaixo do peso`)
        } else if(imc >= 18.5 && imc <= 25){
            return (`Peso normal`)
        }else if(imc >= 25 && imc < 30){
            return (`Acima do peso`)
        }else if(imc >= 30 && imc <= 40){
            return (`Obeso`)
        }else {
            return (`Obesidade Grave`)
    }
}
}
const Jose = new Pessoa(`Jose`, 70, 1.75);
const Lucas = new Pessoa(`Lucas`, 94, 1.74);
console.log(Jose.classificarImc())
console.log(Lucas.classificarImc())
