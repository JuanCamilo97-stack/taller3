const mongoose = require('mongoose');
let User;

const connectDatabase = async () => {
    try {
        if(!User){
            User = mongoose.model('talleres', require('../models/userModel').Schema);
        }

        await mongoose.connect('mongodb+srv://juanatehortua97:Camilo1010036676@cluster0.mg3yga1.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await iniciarData();
        
    } catch (error) {
        console.error('failed to connect to MongoDB', error);
        process.exit(1);
        
    }

};

 const iniciarData = async () => {
     try {
            console.log('Data duccessfully initialized');
        
        
    } catch (error) {
        console.error('Error al crear los usuarios', error);
        process.exit(1);
        
    }
};

module.exports = connectDatabase;