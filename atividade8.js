//Questão 1

class Animal {

    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }
    falar() {
        console.log(`${this.nome} diz: ${this.som}`);
    }
}
const cachorro = new Animal('Cachorro', 'Au Au');
const gato = new Animal('Gato', 'Miau');
const vaca = new Animal('Vaca', 'Muuu');

cachorro.falar();
gato.falar();
vaca.falar();

//Questão 2

class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    exibir() {
        console.log(`A marca do carro é ${this.marca}, o modelo é ${this.modelo} e a velocidade maxima é de ${this.velocidadeMaxima}KM`);
    }
}
let config = new Veiculo('fiat', '123', '300');
config.exibir();

//Questão 3

class Estudante {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = this.notas.reduce((total, nota) => total + nota, 0);
        let media = soma / this.notas.length;
        return media;
    }
}

let estudante1 = new Estudante('Alice', [90, 85, 88, 92]);
let estudante2 = new Estudante('Bob', [78, 82, 80, 76]);

console.log(`${estudante1.nome} tem média: ${estudante1.calcularMedia().toFixed(2)}`);
console.log(`${estudante2.nome} tem média: ${estudante2.calcularMedia().toFixed(2)}`);

//Questão 4

class Utilitario {
    constructor(tempCel, fah) {
        this.tempCel = tempCel;
        this.fah = fah; 
    }
    
}