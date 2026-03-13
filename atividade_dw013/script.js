let contador = 0;

function contar(){
    contador++;
    document.getElementById("numero").innerText = contador;
}

function zerar(){
    contador = 0;
    document.getElementById("numero").innerText = contador;
}