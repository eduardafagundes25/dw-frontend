// x += 0; x = 0;
// + acrecenta o texto

var resultado = document.getElementById('resultado')
resultado.innerHTML = `<p>Aqui vai sair o resultado</p>`
var x = 0;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`