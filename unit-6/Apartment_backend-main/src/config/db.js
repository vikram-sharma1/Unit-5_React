const mongoose = require('mongoose')
module.exports = () =>{

    return mongoose.connect('mongodb+srv://appartment:appartment@cluster0.hla9z.mongodb.net/masai?retryWrites=true&w=majority')
} 