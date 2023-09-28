const n = 367;
const m = 294;

let min = 0;
let max = 0;

const order = (n, m) => {
    if(n > m)
    {
        max = n;
        min = m;
    } else {
        max = m;
        min = n;
    }
}

const q7 = (n, m) => {
    order(n, m);
    let res = [];
    for (min; min <= max; min++) {
        if (min % 3 === 0) {
            res.push(min)
        }
    }

    return res
}

console.log(q7(n, m));