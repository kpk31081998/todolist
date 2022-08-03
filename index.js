const expressj=require("express");
const bodyparser=require("body-parser");

const app=expressj();
app.use(bodyparser.urlencoded({extended:true}));
app.use(expressj.static("public"));
app.set('view engine','ejs');
var lists=[];
app.get("/",function(req,res){
var today=new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long" };
var currentdate=today.toLocaleDateString("en-US",options);
res.render("list",{dayname:currentdate,newitem:lists});
});
app.post("/",function (req,res){
    lists.push(req.body.value);
    res.render("list",{newitem:lists});
    res.redirect("/");
});
let port=process.env.PORT;
if(port==null || port=="")
{
    port=3000;
}
app.listen(port,function(){
    console.log("your web app connected to port 3000");
});