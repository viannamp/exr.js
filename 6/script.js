const n = 326;

const q6 = (n) => {
    const majmo = majmoeArgham(n);

    if (n % majmo === 0) {
        return true
    } else {
        return false;
    }
}

const majmoeArgham = (n) => {
    let sum = 0;
    while (true) {
        if (n > 10) {
            sum += n % 10;
            n = parseInt(n / 10);
        } else {
            sum += n;
            break;
        }
    }

    return sum;
}

console.log(q6(n))