/*
QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar.  
*/

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

    trocaTopoBase() {
        if (this.size() <= 1) return;

        const auxiliar = new Pilha();
        const topo = this.pop();

        while (this.size() > 1) {
            auxiliar.push(this.pop());
        }

        const base = this.pop();
        this.push(topo);

        while (!auxiliar.isEmpty()) {
            this.push(auxiliar.pop());
        }

        this.push(base);
    }
}