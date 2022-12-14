const express = require('express');
const router = express.Router();

const Meme = require('./../models/meme');

router.post('/memes', (req,res) => {
    let {description} =req.body;
    if (description == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    } else if (description.length > 2500)  {
    res.json({
        status: "FAILED",
        message: "The description must have max 2500 characters"
    });
}
})

module.exports = router ;