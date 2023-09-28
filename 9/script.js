const q9 = () => {
    let res = [];
    let i = 1;
    for (i; i <= 9; i++) {
        let sum = 0;
        sum = (i*10)+i;
        res.push(sum)
    }

    return res;
}

console.log(q9())