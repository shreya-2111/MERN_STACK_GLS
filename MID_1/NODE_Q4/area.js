function circle(r) {
    return 3.14*r*r;
}

function rect(l,w) {
    return l*w;
}

function tri(b,h) {
    return 0.5*b*h;
}

module.exports = { circle, rect, tri };