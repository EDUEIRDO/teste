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
    calculo() {
        var soma = 0;
        for(var i =0;i<this.notas.length;i++){
        soma+=this.notas[i];
        }
        return soma / 2
    }
}
let estudante1 = new Estudante('Alice', [90, 85, 88, 92]);

console.log(`Aluna ${estudante1.nome} e sua media foi ${estudante1.calculo()}`);

//Questão 4

class Utilitario {
    constructor(celsius){
        this.celsius = celsius;
    }
    soma(){
        let resultado = this.celsius * 1.8 + 32;
        return resultado
    }
}
let convert = new Utilitario(25);
console.log(`A temperatura está em ${convert.soma()}`);

//Questão 5

class Jogo{
    constructor(entrada, numale){
        this.entrada = entrada;
        this.numale = numale;
    }
    static numAll(){
        let numale = Math.floor(Math.random(0, 1));
        return numale
    }
    logica(){
        if (this.entrada == this.numale) {
            console.log("Acertou");
        }
        else if (this.entrada != this.numale){
            console.log("Errou");
        }
    }
}

let entrada = new Jogo(1);
console.log(entrada.logica());

//Questão 6

