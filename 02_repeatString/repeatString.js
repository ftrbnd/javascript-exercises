const repeatString = function(str, amt) {
    if (amt < 0) return 'ERROR';

    let res = '';
    for (let i = 0; i < amt; i++)
        res += str;

    return res;
};

// Do not edit below this line
module.exports = repeatString;
