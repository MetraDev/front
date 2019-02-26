const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const ResgisterUserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (email) => validator.isEmail(email),
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        token: {
            type: String,
            required: true
        },
        access: {
            type: String,
            required: true
        } // auth, chpass
    }]

});

ResgisterUserSchema.methods.generateAuthToken = function () {
    const user = this;

    const access = 'auth';
    const token = jwt.sign({ _id: user._id, access }, 'jwt encrypt pass').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => token);
};

const RegUser = mongoose.model('authorization', ResgisterUserSchema);

module.exports = RegUser;
