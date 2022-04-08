function sum(a, b){
    let val = BigInt(a) + BigInt(b);
    return String(val);
}

module.exports = sum;