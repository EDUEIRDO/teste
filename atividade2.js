//Questão 1
let i = 1;

while (i <= 20){
    if (i % 2 ==0){
        console.log(i)
    }
}
//Questão 2

function primeNumber(num) {
    var divisor = 2;
    for (; divisor < num; divisor++) {
        if (num % divisor == 0) return false;
    }
    return true;
}

var numero = 100;
for (var i = 2; i < numero; i++) {
    if (primeNumber(i)) console.log(i);
}

//Questão 3



function teste() {
    for (let mult = 5; mult <= 50; mult++) {
        console.log(`Multiplication table for ${mult}:`);
        for (let num = 1; num <= 10; num++) {
            let result = mult * num;
            console.log(`${mult} x ${num} = ${result}`);
        }
        console.log();
    }
}


//Questão 4

function multiplos(){
    let inicio = 1;
    let num = 0;
    let result = [];
    while (num <=10){
        if (inicio % 3 ==0){
            result.push(inicio)
            num++;
        }
        inicio++
    }
    return result;
}
multiplosDeTres = multiplos();
console.log(multiplosDeTres)

