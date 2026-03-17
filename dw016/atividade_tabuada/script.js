function gerarTabuada(){

let numero = document.getElementById("numero").value
let resultado = document.getElementById("resultado")

resultado.innerHTML = ""

for(let i = 0; i <= 10; i++){

let item = document.createElement("li")

item.textContent = numero + " x " + i + " = " + (numero * i)

resultado.appendChild(item)

}

function zerarTabuada(){

document.getElementById("numero").value = ""
document.getElementById("resultado").innerHTML = ""

}

}
