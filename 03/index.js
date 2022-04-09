function toHex(value) {
  
    if(value==0){
        return "0"
    }

    //Метод 1 
    /*
    let list =[]
    for(let i=7; i>=0; i--) //размер 4 байт FFFF FFFF
    {
        let val = (value >> (i*4)) & 0xf; //сдвиг до первого байта & FFFF
        if ( val>0 || list.length>0 )
        {
            let result = (val < 10) ? (val + '') : (String.fromCodePoint('a'.codePointAt() + val - 10)) //10 и более -  определяем соотвествующий индекс и преобразуем
            list.push(result)
        }
    }
    */


    //Метод 2 (перевод в 16-сиситему)
    let b;
    let c = [];
    let map = new Map();
    map.set(10, "a")
        .set(11, "b")
        .set(12, "c")
        .set(13, "d")
        .set(14, "e")
        .set(15, "f");
        
    b = value;
    c.push( value % 16);
    do{
    b = Math.trunc(b / 16);
    c.push( b % 16);
    }while(b>=16)
    
    
    for (let d in c) {
        (c[d]>9) ? (c[d]=map.get(c[d])) : ('')
    }

    c.reverse();
    return c.join(''); 

}


module.exports = toHex;