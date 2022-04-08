function rgb(r, g, b){
    let result;

    r = convert(r);
    g = convert(g);
    b = convert(b);

    result = r+g+b;
    return result.toUpperCase();
}
function convert(val){
    val<=0 ? val="00" : val;
    val>255 ? val=255 : val;
    val = val.toString(16);
    val.length<2 ? (val="0"+val) : val;
    return val;
}

module.exports = rgb;