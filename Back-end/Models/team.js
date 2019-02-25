const mongoose = require('mongoose');


const TeamSchema = mongoose.Schema({
    name:
        {type:String,
            required: true,
            minlength:2,
            maxlength:15,
            trim:true,
            unique:true,
            validate:{
                isAsync:true,
                validator:(name)=>Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
                message:'{VALUE}is not a avalid role , only character (A-Z, a-z)'
            }
        },
    cityId:{
        type:String,
    },
    users:[Object]


});

const Team = mongoose.model('team', TeamSchema);

module.exports = Team;