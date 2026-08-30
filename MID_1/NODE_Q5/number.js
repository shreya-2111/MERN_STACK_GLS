function evenOdd(n) {
    if (n % 2 == 0)
        return "Even";
    else
        return "Odd";
}

function positiveNegative(n) {
    if (n >= 0)
        return "Positive";
    else
        return "Negative";
}

module.exports = {
    evenOdd,
    positiveNegative
};