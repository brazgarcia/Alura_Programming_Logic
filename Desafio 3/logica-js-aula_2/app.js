alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        // Para execultar essa fórmula: "tentativas = tentativas + 1;", podemos representar da mesma forma que foi feito na parte de baixo:
        tentativas++
    }
}

// 1) Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;

while (contador < 11) {
    alert(`O contador nesse momento vale ${contador}`);
    contador++;
}

// 2) Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador_1 = 10;

while (contador_1 >= 0) {
    alert(`O contador nesse momento vale ${contador_1}`);
    contador_1--;
}

// 3) Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contagemRegressiva = prompt("Digite um número para contagem regressiva");

while(contagemRegressiva >= 0) {
    console.log("Contagem regressiva em:", contagemRegressiva);
    contagemRegressiva--;
}

// 4) Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroDigitado = prompt("Digite um número para contagem progressiva");
let contagemProgressiva = 0;

while(contagemProgressiva <= numeroDigitado) {
    console.log("Contagem progressiva em:", contagemProgressiva);
    contagemProgressiva++;
}