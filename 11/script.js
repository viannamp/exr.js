const n = 8;

const q11 = (n) => {
    let res = [];
    // let tedad = 0;
    let sum = 0;
    let i = 1

    for (i; i <= n; i++) {
        if (n % i === 0) {
            if (i % 4 === 0) {
                res.push(i)
                // tedad++;
                sum += i;
            }
        }
    }

    console.log(res);
    console.log(res.length);
    console.log(sum);
}

q11(n);