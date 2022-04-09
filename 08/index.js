function sum(a, b){
    //Метод 1
    //let val = BigInt(a) + BigInt(b);

    //Метод 2 (сложение стобиком)
    let bl = String(b).length;
    let al = String(a).length;
    let l = Math.max(al, bl);
    let u = 0;
    let res = [];
    res.length = l;

    a = String(a).padStart(l, 0);
    b = String(b).padStart(l, 0);

    for(let i = l-1; i>=0; i--){
        
        let v = +(a[i]) + +(b[i]);

        if(v>9){
            if(res[i]>0){
                if(i>0){
                    res[i] = v - 10 + res[i];
                    res[i-1] = 1; 
                }else{
                    res[i] = v + res[i];
                }
            }else{
                res[i] = v-10;
                res[i-1] = 1;
            }
        }else{
            if(res[i]>0){
                v = v + res[i];
                if(v>9 && i>0){
                    res[i] = v-10;
                    res[i-1] = 1;
                }else{
                    res[i] = v;
                }
            }else{
                res[i] = v;
            }
        }
    }

    return res.join('');
}

module.exports = sum;