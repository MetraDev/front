const mongoose = require('mongoose');


const IdeaSchema = mongoose.Schema({
    name:
        {type:String,
            required: true,
            minlength:3,
            maxlength:30,
            trim:true,
            unique:true,
            validate:{
                isAsync:true,
                validator:(name)=>Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
                message:'{VALUE}is not a avalid role , only character (A-Z, a-z)'
            }
        },
    businessModelId:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    teamId:{
        type:String
    }
});

const Idea = mongoose.model('idea', IdeaSchema);
module.exports = Idea;