import noDuplo from "./noDuplo";

class filaDuplamenteLigada {
    constructor(dado) {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        this.head === null;
    }

    add(dados) {
        let novoNo = new noDuplo();
        if(this.isEmpty()){
            this.head = novoNo;
            this.tail = novoNo;
        }else {
            novoNo.proximo = this.head;
            this.head.anterior = novoNo;
            this.head = novoNo;    
        }
    }

    append(dados) {
        let novoNo = new noDuplo(dado);

        if(this.isEmpty()) {
            this.head = novoNo;
            this.tail = novoNo;
        }else{
            novoNo.anterior = this.tail;
            this.tail.proximo = novoNo;
            this.tail = novoNo;
        }
    }

    addAt(dado, pos) {

    }

    removeFist() {
        if(this.isEmpty()){
            throw new Error ("Lista vazia");
        }else{
            let aux = this.head.proximo;

            aux.anterior = null;
            this.head.proximo = null;
            this.head = aux;
        }
    }

    removeLast() {
        if(this.isEmpty()){
            throw new Error("Lista vazia")
        }else {
            let aux = this.tail.anterior;
            
            aux.proximo = null;
            this.tail.anterior = null;
            this.tail = aux;
        }
    }

    revoveAt(pos) {

    }

    search() {

    }
}