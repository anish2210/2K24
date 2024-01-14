const express = require("express");
const app = express();


const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
    // get kidney details
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
        for(let i = 0; i<johnKidneys.length; i++){
            if(johnKidneys[i].healthy){
                healthyKidneys = healthyKidneys + 1;
            }
        }
        const unhealthyKidneys = numberOfKidneys - healthyKidneys;
        res.json({
            numberOfKidneys,
            healthyKidneys,
            unhealthyKidneys
        })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "done !"
    })
})

app.put("/", function(req, res){
    for (let i =0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i = 0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({msg: "done again"});
})

app.listen(3000);