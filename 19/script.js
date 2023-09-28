const n = 122300536;

const q19 = (n) => {
    let last = 0;
    let zoj = 0;
    let fard = 0;
    let sefr = 0;
    while (true) {
        let adad= n % 10;
        n = parseInt(n / 10);

        if (adad === 0) {
            sefr++;
            continue;
        }
        if (adad % 2 === 0) {
            zoj++;
        }
        if (adad % 2 === 1) {
            fard++;
        }

        if (n < 10) {
            if (last > 0) {
                break;
            }
            last += 1;
        }
    }

    console.log('zoj: ', zoj)
    console.log('fard: ', fard)
    console.log('sefr: ', sefr)
}
q19(n)