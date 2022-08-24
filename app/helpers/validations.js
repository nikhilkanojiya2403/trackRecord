const jwt = require('jsonwebtoken')

const jwtTokens = (username) => {
    const user = {
    "username":username
    };

    // console.log(username);

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' });
    
    return accessToken;
}

const validateAmount = (amount) => {

    if(amount < 0 || isNaN(amount)){
        return false;
    }
    return true;
}

const validPassword = (password) => {
    let cap=false,small=false,sp=false,num=false;

    for(let i=0;i<password.length;i++){

        if(password[i] >= 'a' && password[i] <='z'){
            small = true;
        }else if(password[i] >= 'A' && password[i] <='Z'){
            cap = true;
        }else if(password[i] >= '0' && password[i] <='9'){
            num = true;
        }else{
            sp = true;
        }
    }

    console.log(small,cap,num,sp);
    if(cap && small && num && sp){
        return true;
    }
    return false;
}

module.exports = {
    jwtTokens,
    validateAmount,
    validPassword
}