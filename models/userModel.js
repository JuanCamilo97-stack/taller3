const mongoose = require('mongoose');

// Se define un esquema de Mongoose para el usuario utilizando el constructor mongoose.Schema(). El esquema especifica la estructura de los documentos en la colección users.

const userSchema = new mongoose.Schema({
    userid: Number,
    name: String,
    NumRef: String,
    email: String,
    password: String,
});

const User = mongoose.model('talleres', userSchema);

module.exports = User;