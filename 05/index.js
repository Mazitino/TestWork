function rleDecode(source) {
    if(source == ''){
        return '';
    }else{

        let result = '';
        let count = 1;


        for(let i = 0; i <source.length; i++){
            
            if (source[i] <= 9){
                count = source[i]; 
            }else{
                for (let b = 0; b<count; b++){
                    result += source[i];
                }
            }
        }
        return result; 

    }
}

module.exports = rleDecode;