
const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_nodejs_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('Connect Database Successfully');
    } catch (error) {
        console.log('Connection failure!!');
    }
}

module.exports = { connect };