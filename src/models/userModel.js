const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    lastName: String,
    dni: String,
    fec_nac: String,
    sex: String,
    password: String,
    email: {
        type: String,
        unique: true
    },
    avatar: String,
    rol: String
},{
    timestamps: true
})


module.exports = mongoose.model('users', UserSchema) 