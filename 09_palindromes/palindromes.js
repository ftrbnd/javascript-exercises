const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{ }=\-_`~()]/g,"").toLowerCase();
    
    let left = 0, right = str.length - 1;
    while (left <= right) {
        if (str[left++] != str[right--]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
