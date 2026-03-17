// laço de repetição 
// for / while / do while
for (let i = 0; i < 10; i++) {
    console.log(`FOR - O valor de i é: ${i}`);
}

var x = 0;
while (x < 10) {
    console.log(`WHILE - O valor de x é: ${x}`);
    x++;
}

var y = 0;
do {
    console.log(`DO WHILE - O valor de y é: ${y}`);
    y++;
} while (y < 10);

function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    console.log(`Valor do Inicio: ${inicio}`)
    console.log(`Valor do Fim: ${fim}`)
    console.log(`Valor do Passo: ${passo}`)
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = "🚶"
    if (passo <= 0) {
        resultado.innerHTML = 'O passo não pode ser 0 ou menor.'
    } else if (inicio < fim) {
        while (inicio <= fim) {
            resultado.innerHTML += `➡️${inicio}`
            inicio += passo
        }
    } else {
        while (inicio >= fim) {
            resultado.innerHTML += `⬅️${inicio}`
            inicio -= passo
        }
    }
}