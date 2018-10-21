const mongoose = require('mongoose');
module.exports.connect = function () {
    // connect to mlab database
    // make sure to replace my db string & creds with your own
    mongoose.connect('mongodb://root:abhi%401992@ds115963.mlab.com:15963/xtreme',{ useNewUrlParser: true, useCreateIndex: true })
    mongoose.connection.once('open', (err) => {
        if(!err){
            console.log('conneted to database');
        }
       
    });
}
