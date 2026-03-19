/* QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida. */

class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.itens.pop();
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    size() {
        return this.itens.length;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.itens[this.itens.length - 1];
    }

    inverte(palavra) {
        const pilha = new Pilha();
        for (let i = 0; i < palavra.length; i++) {
            pilha.push(palavra[i]);
        }
        let resultado = "";
        while (!pilha.isEmpty()) {
            resultado += pilha.pop();
        }
        return resultado;
    }
}