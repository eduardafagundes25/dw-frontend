//Menores de 16 não votam
//Entre 16 e 18 voto opcional
//Maiores de 18 voto obrigatório
 //Acima de 70 voto opcional


 var idade = 12;
 
if (idade < 16) {
    console.log("Não vota.");
}
else if (idade >= 16 && idade < 18) {
    console.log("Voto opcional.");
}
else if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatório.");
}
else if (idade > 70) {
    console.log("Voto opcional.");
}