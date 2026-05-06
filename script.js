//* 2) Criar um programa em JS que calcule a soma de todos os números de 1 até 10.
//* 💡 Dica: armazene a soma em uma variável.
//! ⚠️ Obrigatório somar a cada iteração e não apenas somar tudo de uma vez.
let montante = 0;
for (let i = 1; i <= 10; i++) {
    montante = montante + i;
    alert(montante)
}
alert(`o resultado de todos os números de 1 a 10 somados é: ${montante}`)