const express = require('express');
const router = express.Router();

// get a list of ahlamur from the db
router.get('/ahlamur', function(req, res){
    res.send({type: 'GET'});
});

// add a new ahlamur to the db
router.post('/ahlamur', function(req, res){
    console.log('You made a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// update an ahlamur in the db
router.put('/ahlamur/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete an ahlamur from the db
router.delete('/ahlamur/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;