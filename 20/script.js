
let adad = 0
let res = [];

for (let a = 1; a <= 9; a = a + 2) {
    for (let b = 2; b <= 9; b = b + 2) {
        for (let c = 1; c <= 9; c = c + 2) {
            for (let d = 2; d <= 9; d = d + 2) {
                adad = (a * 1000) + (b * 100) + (c * 10) + d;
                res.push(adad)
            }
        }
    }
}


console.log(res)