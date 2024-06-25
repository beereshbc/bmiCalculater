const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("The result of two numbers is"+ result);
});

app.get("/bmicalculater", function(req, res){
    res.sendFile(__dirname + "/bmicalculater.html");
});

app.post("/bmicalculater",function(req, res){
    var ht =parseFloat(req.body.height);
    var wt = parseFloat(req.body.weight);

    var bmi = wt/(ht*ht);
    res.send(bmi);
})


app.listen(3000, function(){
    console.log("This website is works on port 3000");
});
