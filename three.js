var express=require("express")
var app=express()
var mysql=require("mysql2")
var fs=require("fs")
var bodyParser=require("body-parser")


var conn=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "parth",
    database: "practice"
})

conn.connect(function(err){
    if (err) throw err
    console.log("connected")
})

app.use(bodyParser.urlencoded({ extended: true}))
app.post("/one",(req,res)=>{
    console.log(req.body)

    console.log(req.body.name)
    var sql="Insert into customers (name,lname) values ('"+req.body["name"]+"','"+req.body["lname"]+"')";
    console.log(sql)
    conn.query(sql,function(err,Result)
    {
        if(err) throw err;
        console.log("1 record inserted")
    })
})

app.get("/",(req,res)=>{
    var sql="select * from customers"
    conn.query(sql,function(err,Result){
        if(err) throw err
        console.log(Result)
        var send={"data":Result}
        res.setHeader("Content-type","application/json")
        res.end(JSON.stringify(send))
    })
})

app.post("/result_of_search",(req,res)=>{
    // res.setHeader('Content-type','application/json')
    
    var search=req.body
    console.log(req.body)
    console.log(search.name)
    conn.query("select * from customers where name='"+search["name"]+"';",function(err,result)
    {
        if(err) throw err;
        var send={"data":result}
        res.setHeader('content-type','text/html')
        res.send("<h1> we founf </h1>")
        // res.send(JSON.stringify(send))
        // res.render('contact')
        // res.redirect("result.html")
    })
})
app.use(express.static("public"))

app.listen(3000)


