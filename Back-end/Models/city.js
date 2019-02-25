

const mongoose = require('mongoose');


const citySchema = mongoose.Schema({
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
    address: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: (address) => Boolean(address.match(/^[0-9A-Za-z \-,]+$/)),
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
});

const city = mongoose.model('city', citySchema);

module.exports = (city)


