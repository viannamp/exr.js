function number(salery) {
    if (salery < 50000) {
        console.log('tax free', salery);
    } else if (salery >= 50000 && salery < 100000) {
        let tax = salery / 100 * 10;
        let sal = salery - tax;
        console.log('sal:', sal);
        console.log('tax:', tax)
    } else if (salery >= 100000) {
        let tax = salery / 100 * 15;
        let sal = salery - tax;
        console.log('sal:', sal);
        console.log('tax:', tax);
    }
}

number(500000);