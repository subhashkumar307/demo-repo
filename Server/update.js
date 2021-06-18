var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";

var findDocument = {Name : "Shirt"};

var newValues = {$set:{Price:2500.38}};

mongoClient.connect(url, function(err, clientObject){
    if(!err) {
        var dbo = clientObject.db("ishopdb");
        dbo.collection("tblproducts").updateOne(findDocument, newValues, function(err, result){
            if(!err){
                console.log("Record Updated");
            } else{
                console.log("err.message");
            }
        })
    }
})