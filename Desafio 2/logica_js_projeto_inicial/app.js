// Conteúdo da vídeo aula + desafios 

alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 9;
console.log(numeroSecreto);

let chute = prompt("Escolha um número entre 1 e 10");
console.log("Valor do chute:", chute);

console.log("resultado da compraração:", chute == numeroSecreto);

// Se chute for igual ao número secreto 
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('O valor secreto é:', numeroSecreto);
    alert ("você errou :(");
}

// 1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Qual dia da semana é hoje?");
console.log("foi digitado:", diaDaSemana);

if (diaDaSemana == "Sábado" || diaDaSemana== "Domingo") {
    alert("Bom fim de semana! ;)");
} else if (diaDaSemana == "Segunda" || diaDaSemana == "Terça" || diaDaSemana == "Quarta" || diaDaSemana == "Quinta" || diaDaSemana == "Sexta") {
      alert("Tenha uma boa semana! ;)");
} else {
    alert("Valor invalido!");
}

// 2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let valor = prompt("Digite um número qualquer");
console.log("foi digitado:", valor);

if (valor >= 1) {
    alert("O valor que você digitou é possitivo.");
} else if (valor <= -1) {
    alert("O valor que você digitou é negativo.");
} else {
    alert(`O valor que você digitou é o: ${valor}`);
}

// 3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Informe sua pontuação:");
console.log("Valor digitado pelo usuário", pontuacao);

if (pontuacao >= 100) {
    console.log("Parabéns!! Você venceu!!");
} else {
    console.log("Que pena!! Tente novamente.");
}

// 4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoConta = 500; // Saldo disponível
alert(`Seu saldo é de R$${saldoConta}.`);

// 5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Qual é seu nome?");
console.log("O nome digitado é:", nome);
alert(`Seja bem-vindo ${nome}!!`);