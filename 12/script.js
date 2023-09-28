const n = 378;

const q12 = (n) => {
    let min = 1;
    let max = 1000;
    let mid = 0;

    while (true) {
        mid = parseInt((min + max) / 2);
        if (n > mid) {
            min = mid;
        }
        if (n < mid) {
            max = mid;
        }
        if(mid === n){
            break
        }
    }

    return mid;
}

console.log(q12(n))