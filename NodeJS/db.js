const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Pakwheels', (err) =>{
    if(!err)
        console.log('mongoDB connection sucessfull');
    else
        console.log('Error making connection: '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;