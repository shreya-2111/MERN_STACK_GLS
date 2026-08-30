function total(a,b,c,d,e) {
    return a+b+c+d+e;
}

function per(total) {
    return total/5
}

function grade(p) {
     if (p >= 90)
        return "A";
    else if (p >= 80)
        return "B";
    else if (p >= 70)
        return "C";
    else if (p >= 60)
        return "D";
    else
        return "F";
}

module.exports = { total, per, grade };