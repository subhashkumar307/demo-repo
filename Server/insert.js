var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";

var data = {
    ProductId:5,
    Name: "Mobile",
    Price: 25000.25,
    Stock: true
}

mongoClient.connect(url, function(err, clientObject){
    if(!err) {
        var dbo = clientObject.db("ishopedb");
        dbo.collection("tblproducts").insertOne(data, function(err, result){
            if(!err) {
                console.log("Record Inserted");
            }
        })
    }
})