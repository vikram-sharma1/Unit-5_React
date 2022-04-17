const mongoose = require('mongoose')
module.exports = () =>{

    // return mongoose.connect('mongodb+srv://appartment:appartment@cluster0.hla9z.mongodb.net/masai?retryWrites=true&w=majority')
    return mongoose.connect('mongodb+srv://fullstack:fullstack@cluster0.kzmo8.mongodb.net/DatabaseApartment?retryWrites=true&w=majority')
} 