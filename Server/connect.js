var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

mongoClient.connect(url, function(err, clientObject){
    if(!err) {
        console.log("Connected Successfully...");
    } else {
        console.log(err.message);
    }
});