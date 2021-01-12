module.exports = function reverse (n) {
    let i = 1;
    let res = '';
    n = Math.abs(n).toString();
    while(i <= n.length){
        res += n[n.length - i];
        i++;
    }
    return res;
}