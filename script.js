//todo 4) Crie um programa em JS que mostre o menu:
//* 1 - Inserir produto
//* 2 - Listar produtos
//* 3 - Sair
//* Enquanto o usuário não escolher 3, o menu deve continuar aparecendo.
//* Quando escolher 3, o programa deve mostrar: "Sistema encerrado".

let opcao;
let listaProdutos = "Os produtos são:";
let produto;
let quantidadeProduto = 0;
do {
  opcao = Number(
    prompt(`olá usuário escolha qual das opções a seguir você deseja acessar
1 - Inserir produto
2 - Listar produtos
3 - Sair`),
  );
  switch (opcao) {
    case 1:
      produto = prompt("Insira o nome do produto");
      quantidadeProduto++;
      listaProdutos = `${listaProdutos}
${quantidadeProduto}- ${produto}`;
      break;
    case 2:
      if (listaProdutos === "Os produtos são:") {
        alert("Você ainda não inseriu nenhum produto");
      } else {
        alert(listaProdutos);
      }
      break;
    case 3:
      alert("Sistema encerrado.");
      break;
    default:
      alert("você não inseriu uma opção válida");
      break;
  }
} while (opcao != 3);
