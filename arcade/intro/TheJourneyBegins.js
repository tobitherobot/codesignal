function add(param1, param2) {
    return param1 + param2;
}

function centuryFromYear(year) {
    return Math.floor((year + 99) / 100);
}

function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}