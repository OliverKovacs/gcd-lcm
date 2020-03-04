
// Oliver Kovacs 2020

const gcd = (a, b) => {
    if (b > a) b = a + (a = b) - b;
    while (true) {
        if (a % b == 0) return Math.abs(b);
        b = a % (a = b);
    }
};

const lcm = (a, b) => {
    return Math.abs(a / gcd(a, b) * b);
};