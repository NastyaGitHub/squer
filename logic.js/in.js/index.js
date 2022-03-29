"use strict";

let solveEquation = (a, b, c) => {
    if (a == 0)
        return false;
    let res = {};
    let D = b ** 2 - 4 * a * c;
    console.log('D = ' + D);
    if (D < 0)
        return false;
    res['discriminant'] = D;
    if (D == 0)
        res['square root'] = (-b) / (2 * a);
    else if (D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res['square root'] = tmp;
    }
    return res;
}
console.log(solveEquation(2,7,1));