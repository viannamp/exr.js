const n = 1;
const x = 10;

function calcP(n) {
    let pointer = 3;
    let sum = 0;
    while (true) {
        if (pointer > n) {
            break;
        }
        let item = 1 / pointer;
        sum += item;
        pointer += 3;
    }
    return sum;
}

function calcS(x, n) {
    let sum = 1;
    let i = 1;
    let item = 1;
    while (i <= n) {
        item *= x;
        sum += item;
        i++;
    }
    return sum;
}


console.log("p is ", calcP(n))
console.log("s is ", calcS(x, n))

