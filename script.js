//todo 5) Criar um programa que permita ao usuário digitar números continuamente.
//! Regras:
//* - o sistema deve pedir números até o usuário digitar 0.
//* - enquanto isso, o programa deve: somar todos os números e contar quantos números foram digitados;
//! Ao final, mostrar:
//* - Quantidade de números digitados;
//* - Soma total;
//* - Média;

let numero;
//? que faz a variável montante?
//* montante é a variavél da soma de todos os números
let montante = 0;
let i = 0;
do {
  numero = Number(prompt(`Insira um número qualquer`));
  if (isNaN(numero)) {
    alert("Número inválido inserido");
  } else if (numero != 0) {
    i++;
    montante = montante + numero;
    alert(`a soma de todos os números inseridos são ${montante}
e ${i} foram somados`);
  }
} while (numero != 0);
alert(`a soma final foi: ${montante}
${i} números foram somados 
e a media total foi ${(montante / i).toFixed(2)}`);
