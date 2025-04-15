//questao 3:

let precoProduto = Number(prompt("Digite o preço do seu produto:"));
let valorAVista =  precoProduto - (precoProduto * 0.10);
let valorParcelado = precoProduto / 3;

alert("Preço: R$" + precoProduto + " À vista R$:" + valorAVista + " Ou 3x de R$:" + valorParcelado);