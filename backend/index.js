const express = require('express');
const app = express();

app.get('/test', function(req, res){
   res.status(200).send("Hello world!");
});

app.listen(3001, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3001);
})