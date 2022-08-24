const jwt = require('jsonwebtoken');

function verificationToken(req,res,next){

    const authHeader = req.headers['authorization'];//Bearer TOKEN

    // console.log("authHeader:",authHeader);
    
    const token  = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).json({error:"NULL TOKEN"});

    // const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    // req.username  = decoded.username;

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,decoded) => {
        if(error)  return res.status(401).json({error:error.message});
        req.username = decoded.username;
        console.log(req.username);
        next();
    })
}

module.exports = {verificationToken};