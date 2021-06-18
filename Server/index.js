var http = require("http");

var app = http.createServer(function(request , response){
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    var responseMessage = "<h2>Welcome to Node.js</h2>";
    response.write(responseMessage);
    response.end();
});
app.listen(8080);
console.log("Server Started : http://127.0.0.1:8080");