const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog-nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Sucessfully!!!');
    } catch (error) {
        console.log('Connect Failed');
    }
}

module.exports = { connect };
