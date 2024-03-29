const precoEtanol = 5.59;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 1000;
const tipoCombustivel = `Etanol`

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGastoGasolina = litrosConsumidos * precoGasolina;
const valorGastoEtanol = litrosConsumidos * precoEtanol;

if(tipoCombustivel === `Etanol`){
    console.log(valorGastoEtanol.toFixed(2))
}
if(tipoCombustivel === `Gasolina`){
    console.log(valorGastoGasolina.toFixed(2))
}
