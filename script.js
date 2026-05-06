//todo 3) Criar um programa em JS que peça um número ao usuário e mostre a tabuada dele de 1 até 10.

let numUm;
let message = "";
do
  numUm = Number(
    prompt(
      "Por favor insira um número e eu mostrarei a tabuada dele de 1 a 10",
    ),
  );
while (isNaN(numUm));
for (let i = 1; i < 11; i++) {
  message = `${message}${i} x ${numUm} = ${i * numUm}
`;
  alert(message);
}
