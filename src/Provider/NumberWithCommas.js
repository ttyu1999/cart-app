const NumberWithCommas = (num) => {
    var num = (num || 0).toString();
    var result = '';

    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}

export default NumberWithCommas;