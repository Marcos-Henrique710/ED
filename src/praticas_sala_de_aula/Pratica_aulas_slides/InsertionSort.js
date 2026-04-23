class insertionSort {
    constructor() {
        this.dados = [];
    }

    //função para a ordenação dos dados:
    Ordena() {
        for(let i = 1; i < this.dados.length; i++) {
            let aux = this.dados[i];
            let j = i - 1;

            while (j >= 0 && this.dados[j] > aux) {
                this.dados[j + 1] = this.dados[j];
                j--;
            }
            this.dados[j+1] = aux;
        }
        return this.dados;
    }
}

// Testes do BubleSort
const b = new insertionSort();

// Teste 1
b.dados = [5, 3, 8, 1];
console.log(b.Ordena()); // esperado: [1, 3, 5, 8]

// Teste 2
b.dados = [2, 1];
console.log(b.Ordena()); // esperado: [1, 2]

// Teste 3
b.dados = [1, 2, 3];
console.log(b.Ordena()); // esperado: [1, 2, 3]

// Teste 4
b.dados = [9, 7, 5, 3, 1];
console.log(b.Ordena()); // esperado: [1, 3, 5, 7, 9]

// Teste 5
b.dados = [];
console.log(b.Ordena()); // esperado: []

// Teste 6
b.dados = [4];
console.log(b.Ordena()); // esperado: [4]

// Teste 7
b.dados = [3, 3, 2, 1, 2];
console.log(b.Ordena()); // esperado: [1, 2, 2, 3, 3]