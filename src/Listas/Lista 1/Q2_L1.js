/* 
QUESTÃO 2. Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
Javascript.

i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
topoA e topoB).
ii. As funções ÉVaziaA e ÉVaziaB.
iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.
*/

class PilhaCompartilhada {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.vetor = new Array(tamanho);
        this.topoA = -1;
        this.topoB = tamanho;
    }

    isEmptyA() {
        return this.topoA === -1;
    }

    isEmptyB() {
        return this.topoB === this.tamanho;
    }

    empilhaA(elemento) {
        if (this.topoA + 1 === this.topoB) {
            console.log("Erro: vetor cheio!");
            return;
        }
        this.vetor[++this.topoA] = elemento;
    }

    empilhaB(elemento) {
        if (this.topoA + 1 === this.topoB) {
            console.log("Erro: vetor cheio!");
            return;
        }
        this.vetor[--this.topoB] = elemento;
    }

    desempilhaA() {
        if (this.isEmptyA()) {
            console.log("Pilha A vazia!");
            return;
        }
        return this.vetor[this.topoA--];
    }

    desempilhaB() {
        if (this.isEmptyB()) {
            console.log("Pilha B vazia!");
            return;
        }
        return this.vetor[this.topoB++];
    }
}