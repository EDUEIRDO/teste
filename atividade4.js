var num = [1, 2, 3, 4, 5];

num[4] = 10;

console.log(num.length)
console.log(Math.max.apply(null, num));

for (a of num) {
    console.log(a)
}