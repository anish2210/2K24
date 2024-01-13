const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    // get kidney details
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = kidneys.length;
    const healthyKidneys = 
})

app.listen(3000);