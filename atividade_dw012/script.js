function calcular(){

var numero = prompt("Digite um número:");

numero = Number(numero);

var dobro = numero * 2;
var metade = numero / 2;

document.getElementById("resultado").innerHTML =
"O dobro de " + numero + " é " + dobro + " e a metade é " + metade + "!";

}