const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String,
    //     required: true
    // }

},
    {
        timestamps: true
    }
);


userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});


const user = mongoose.model('user', userSchema);


module.exports = user;