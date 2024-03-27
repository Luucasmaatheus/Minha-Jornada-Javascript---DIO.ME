function escrevaMeuNome(name){
    console.log(`Meu nome é ` + name)

}


function verificarIdade(idade){
    if(idade >= 18){
        console.log(`É maior de idade`);
    }else if(idade < 18){
        console.log(`É menor de idade`);
    }
}


(function (){
    escrevaMeuNome(`Lucas Matheus oliveira nascimento`);
    verificarIdade(26);
})();
