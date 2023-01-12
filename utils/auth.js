const jwt = require('jsonwebtoken');

exports.createJWT =(email, userId, duration) => {
    const payload = {
        email, userId, duration
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET,{
        expiresIn: duration,     
    });
};


//check code if required for signup/signin

// https://medium.com/swlh/user-authentication-using-mern-stack-part-1-backend-cd4d193f15b1