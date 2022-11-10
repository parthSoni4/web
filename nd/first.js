var http=require("http");
var dt=require("./firstmodule");
var url=require("url");

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("\n The date and Time are currently  \n"+dt.myDateTime());
    // res.write(req.url);
    var q=url.parse(req.url,true).query;
    var txt=q.year+" "+q.month;

    res.end(txt);

}).listen(8000);
// require is used to include a module
// http built in module allow us to transfer the data over the hyper text transfer protocol
// http module create an http server that listens to server ports 
// and give a response back to the client
// if the response is in the form of html
// we should include an http header with correct content type
// request from the client is in form of object "req"
// object req has property called "url".
