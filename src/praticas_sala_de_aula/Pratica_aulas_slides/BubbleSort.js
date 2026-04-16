class BubleSort {
    constructor() {
        this.dados = [];
    }
    
    //função para a ordenação dos dados:
    Ordena() {
        //laços de repetição para percorrer o vetor
        for (let i = 0; i < this.dados.length - 1; i++) {
            for(let j = 0; j < this.dados.length - 1 - i; j++){
                //veridicação e ordenação dos componentes
                if(this.dados[j] > this.dados[j + 1]){
                    let temp = this.dados[j];
                    this.dados[j] = this.dados[j + 1];
                    this.dados[j + 1] = temp;
                }
            }
        }
        return this.dados;
    }
}

// Testes do BubleSort
const b = new BubleSort();

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