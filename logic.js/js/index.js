"use strict";
function getPayment(sum, period, rate) {
    var bet,
        koef,
        result;
  bet = (rate / 12) / 100;
    koef = (bet * (Math.pow(1 + bet, period * 12))) / (Math.pow(1 + bet, period * 12) - 1);

    result = sum * koef;
    return result.toFixed();
};
console.log(getPayment(6434, 34478, 3435))