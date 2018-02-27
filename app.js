var express=require('express');
//users router imported
var studentsRouter=require('./students/studentsRouter');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://student:students@ds249418.mlab.com:49418/students")

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

app.use ('/students',studentsRouter);//users

app.use('/get',function(req,res){
    res.send('dd')
})







var port=process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on localhost:3000`));