/* QUESTÃO 2: Implemente uma fila usando a implementação duas pilhas básicas */

class FilaComPilha {
    constructor() {
        this.pilha1 = [];
        this.pilha2 = [];
    }

    enqueue(x) {
        this.pilha1.push(x);
    }

    dequeue() {
        if(isEmpty() === true) {
            while(this.pilha2.length > 0){
                this.pilha2.push(this.pilha1.pop());
            }
        }
        return this.pilha2.pop();
    }

    

}