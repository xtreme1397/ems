const mongoose = require('mongoose');
module.exports.connect = function () {
    // connect to mlab database
    // make sure to replace my db string & creds with your own
    mongoose.connect('mongodb://<username>:<password>@<mongourl>/<dbname>',{ useNewUrlParser: true, useCreateIndex: true })
    mongoose.connection.once('open', (err) => {
        if(!err){
            console.log('conneted to database');
        }
       
    });
}
