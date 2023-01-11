var mysql=require("mysql2")

var conn=mysql.createConnection({
    host: "localhost",  
    user: "root",
    password: "parth"
})

conn.connect(function(err){
    if (err) throw(err)
    console.log("connected")
})