const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true,
})

module.exports = model('User', UserSchema);

UserSchema.method.encryptPassword = async password => { // Schema method to encrypt Password
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.method.matchPassword = async function(password) { // Schema method to compare the password entered by the user and the password save in the data base (both passwords are going to be encrypted cause the encryptPassword method)
    return await bcrypt.compare(password, this.password);
}