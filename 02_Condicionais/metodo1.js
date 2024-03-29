
const precoEtanol = 5.79;
const precoGasolina = 6.35;
const kmPorLitro = 10;
const distanciaEmKm = 380;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGastoGasolina = litrosConsumidos * precoGasolina;
const valorGastoEtanol = litrosConsumidos * precoEtanol;

console.log("Você gastou o total de R$" + valorGastoEtanol + " reais de Etanol")
console.log("Você gastou o total de R$" + valorGastoGasolina.toFixed(2) + " reais de Gasolina")


