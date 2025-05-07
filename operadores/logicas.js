let temDinheiro = true;
let estaChovendo = true;
let carroEstaNaGaragem = false;

let resultadoE = "#AND Você vai ao shopping?";
resultadoE += temDinheiro && estaChovendo;
console.log(resultadoE);

let resultadoOU = "#OR você vai ao shopping? ";
resultadoOU += estaChovendo || carroEstaNaGaragem;
console.log(resultadoOU);