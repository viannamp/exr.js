
let number = 0;
let res = [];

for (let a = 1; a <= 9; a = a + 2) {
    for (let b = 1; b <= 9; b = b + 2) {
        number = (a * 10) + b;
        res.push(number)
    }
}


console.log(res)