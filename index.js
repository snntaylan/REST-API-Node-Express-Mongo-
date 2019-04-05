const express = require('express');

// set up express app
const app = express();

// GET request
app.get('/api', function(req, res){ // route : api
    console.log('GET request');
    res.end();
});

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

// handle request express
