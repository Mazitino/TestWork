function toHex(value) {
  
    if(value==0){
        return "0"
    }
    
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
    
    return list.join(''); //Объединяем все элементы в строку

}

module.exports = toHex;