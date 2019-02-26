const regUser = require('../Models/resgisterUser');
const jwt = require('jsonwebtoken');


const authorization = (req, res, next)=>{
    const token = req.header('Authorization');
    try{
        const userData= jwt.verify(token, 'jwt encrypt pass');

        regUser.findById(userData._id).then(data =>{
            req.user =  data;
            next();
        });

    }catch (e) {
        res.status(401).send('No autorizado')
    }

}
module.exports = authorization;