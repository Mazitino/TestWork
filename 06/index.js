function getResult(actions) {


    let result = [];
    for(let i=0; i<actions.length; i++){
        let res = false;
        if(actions[i] == "power"){
            res = check(actions, i)
            if(res){
                result.push(res);
            }
        }
    }
    return result.length;
}

module.exports = getResult;

function check(actions, ind){
    for(let i=ind; i<actions.length; i++){

        if(actions[i+1] == "keystrokes"){
            if(actions[i+2] == "click" && actions[i+3] == "click"){
                return true;
            }
        }
        i++;
    }
    return false;
}