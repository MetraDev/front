const mongoose = require('mongoose');


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

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserSchema,TeamSchema}