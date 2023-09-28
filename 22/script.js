let res = []
let number = 0

for (let a = 1; a <= 9; a += 2) {
    for (let b =2; b <= 9; b += 2) {
        number = (a * 100) + (b * 10) + a;
        res.push(number)
    }
}

console.log(res)