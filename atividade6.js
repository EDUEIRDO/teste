//Objetos
//Questão 1 e 2
let carro = {
    marca: 'fiat',
    modelo: 'sla',
    ano: '2011',
    exibir: function(){
        console.log(`O modelo do carro é ${this.modelo}`);
    }
}

console.log(carro.modelo);

carro.ano = 2013;
carro.cor = 'vermelho';

console.log(carro.ano, carro.cor);

//Questão 3

let calculadora = {
    soma: function (a, b){
        return a + b;
    }

}
console.log(calculadora.soma(1, 2));

//Questão 4

let carros = {
    marca: 'fiat',
    modelo: 'sla',
    ano: '2011',
    exibir: function(){
        console.log(`O modelo do carro é ${this.modelo}`);
    }
}
//confuso
for (marca in carros) {
    console.log(`${carros.marca}`);
}

//Questão 5

let livro = {
    título: 'o fafas',
    autor: 'EDUEIRDO'
}

livro.título = 'fafas apenas';

console.log(livro.título, livro.autor)

//Questão 6

let algumaCoisa ={
    um: 1,
    dois:2
}

console.log(Object.keys(algumaCoisa));
console.log(Object.values(algumaCoisa));