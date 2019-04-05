const express = require('express');
const router = express.Router();

// Get list of ahlamur from db
router.get('/ahlamur', function(req, res){
    res.send({type: 'GET'})
});

// add a new ahlmaur to the db
router.post('/ahlamur', function(req, res){
    res.send({type: 'POST'})
});

// update an ahlamur in the db
router.put('/ahlamur/:id', function(req, res){
    res.send({type: 'PUT'})
});

// delete an ahlamur from the db
router.delete('/ahlamur', function(req, res){
    res.send({type: 'DELETE'})
});


module.exports = router;



