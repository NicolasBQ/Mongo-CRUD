const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
})


UserSchema.methods.encryptPassword = async function(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch(error) {
        console.log(error);
    }
}

// UserSchema.methods = async function(password) {
//     return await bcrypt.compare(password, this.password);
// }

// UserSchema.methods = function() {
//     console.log('GUAU');
// }

module.exports = model('User', UserSchema);


