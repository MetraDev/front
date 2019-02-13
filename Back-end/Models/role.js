const mongoose = require('mongoose');


const RoleSchema = mongoose.Schema({
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
    isDemium:{
        required:true,
        type:Boolean,
    }
});

const Role = mongoose.model('role', RoleSchema);

module.exports = Role;