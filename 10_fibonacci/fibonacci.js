const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    n = parseInt(n);

    if (n == 1) return 1;

    let first = 0, second = 1, fib = 0;
    for (let i = 2; i <= n; i++) {
        fib = first + second;
        first = second;
        second = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
