function rle(source) {
    let result = '';
    let a = 0;

    for(let i = 0; i <=source.length; i++){        
        if (source[i] == source[i+1]){
            a++;
        }else{
            result += source[i] + (a ? a+1 : '')
            a = 0;
        }
        
    }

    return result;
}

module.exports = rle;