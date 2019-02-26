const mongoose = require('mongoose');


const BusinessSchema = mongoose.Schema({
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
        }
});

const Business = mongoose.model('business', BusinessSchema);

module.exports = Business;