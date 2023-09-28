
const isAval = (n) =>{
    const mid = n / 2;
    let tedad = 0
    let i = 1;
    for (i; i <= mid; i++) {
        if (n % i === 0) {
            tedad++;
        }
    }

    if (tedad < 2) {
        return true;
    } else {
        return false;
    }
}

const q10 = () => {
    let res = [];
    let i = 2
    for(i; i<=1000; i++){
        if (isAval(i)) {
            res.push(i)
        }
    }

    return res;
}

console.log(q10());