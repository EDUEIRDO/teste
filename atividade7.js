//Atividade do Map

let livros = new Map()

livros.set('sas1', 'EDUEIRDO');
livros.set('sas2', 'EDUEIRDO');
livros.set('sas3', 'EDUEIRDO');

console.log(livros.get('sas1'));

for(let [chave, valor] of livros) {
    console.log(`${chave}: ${valor}`);
}
console.log(livros.size);
livros.delete('sas2');
console.log(livros.has('sas2'));

let teste = new Map()

teste.set(1, 'um');
teste.set(4, 'quatro');

console.log(teste.get(1));