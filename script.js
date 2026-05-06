//*1) Criar um programa em JS que mostra uma contagem regressiva de 10 até 1 (escolher o looping de repetição mais apropriado - lembre-se você já sabe quanto vai contar).
let message = "";
for (i = 10; i >= 2; i--) {
    message = `${message} ${i}`;
    alert(message)
}
alert(message + " 1, fim da contagem regressiva!")