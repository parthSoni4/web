const fs=require("fs")
const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout    
})
const read2=require("readline-sync");
const users=require("./employee");
const express=require("express")
var app=express()

fs.readFile("./employee.json",function(err,data){
    if(err) throw err;

    const users=JSON.parse(data);
    // console.log(users);
})

let user={
    name: "Sham",
    id: 30,
    phno: 876867
}
users.records.push({ id: 1234, name: 'Richie', phno: '1234567890' },);

readline.question("Do you want to read or write?",name=>{
    if(name=="read")
    {
        fs.readFile("./employee.json",function(err,data){
            if(err) throw err;
        
            const users=JSON.parse(data);
            console.log(users);
        })
        
    }
    if(name=="write")
    {
        console.log(users);
        fs.writeFile("employee.json", JSON.stringify(users),err=>{
            if(err) throw err;
            console.log("Done writing");
        })
    }
    readline.close()
})


app.get("/", (req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'})
    res.sendFile(__dirname+"/one.html")
}).listen(8080);

app.get("/second",(req,res)=>{
    res.sendFile(__dirname+"/two.html")
})