const express = require("express");
const app = express();


// Express.json() is a middleware
// app.use is used for using middlewares.
app.use(express.json());

app.post('/health-checkup', function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
});


// Below is the example of global catches (a kind of middleware) which catches any error or bad input provided by the user at their end. 
// this way we were able to validate the input provided by the end user.
app.use(function(err, req, res, next){
    res.json({
        msg : "This message is shown because some bad input was provided"
    })
})

app.listen(3000);