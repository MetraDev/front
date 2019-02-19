const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const UserSchema = mongoose.Schema({
    name:
        {type:String,
            required: true,
            minlength:2,
            maxlength:15,
            trim:true,
            unique:true,
            validate:{
                isAsync:true,
                validator:(name)=>!!name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/),
                message:'{VALUE}is not a avalid role , only character (A-Z, a-z)'
            }
        },
    surname:
        {type:String,
            required: true,
            minlength:2,
            maxlength:15,
            trim:true,
            unique:true,
            validate:{
                isAsync:true,
                validator:(name)=>!!name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/),
                message:'{VALUE}is not a avalid role , only character (A-Z, a-z)'
            }
        },
    telephone:
        {type:String,
            required: true,
            minlength:3,
            maxlength:15,
            trim:true,
            unique:true,
            validate:{
                isAsync:true,
                validator: (description) => Boolean(true),
                message:'{VALUE}is not a avalid role , only character (A-Z, a-z)'
            }
        },
    roleId:{
        required:true,
        type:Boolean,
    },
    users:[
        UserSchema]


});
UserSchema.pre('save', function (next) {
    console.log('Se ha guardado')

    const user = this;
    if(user.isModified('pasword')){
        bcrypt.genSalt(10, (err,salt )=>{
            bcrypt.hash(user.password, salt, (err,hash)=>{
                console.log(user.password.salt)
                console.log(hash)
                bcrypt.compare(user.password, hash ,(err, res)=>{
                    if(!res ) throw  new Error (err)
                    user.password = hash;
                    next();
                })

            })
        })

        console.log('La pass ha cambiado')
    }else {
        console.log('La pass no  ha cambiado')
        next();
    }

})

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserSchema,TeamSchema}