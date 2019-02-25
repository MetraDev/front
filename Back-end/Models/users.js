const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    surname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (suername) => Boolean(suername.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    telephone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    roleId:{
        required:false,
        type:Boolean,
    }


});
/*
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

})*/

const UserModel = mongoose.model('user', UserSchema);
module.exports = { UserSchema, UserModel };