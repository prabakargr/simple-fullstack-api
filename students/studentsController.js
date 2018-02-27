var Students=require('./studentModel');

var createStudent=function(req,res){
    var student=new Students(req.body);
    console.log(Students);
    student.save(function(err){
        if(err){
            res.status(404).send('cannot add student');
        }else{
            res.send(student)
        }
    })
};

var getStudents=function(req,res){
    Students.find(function(err,students){
        if(err){
            res.status(404).send('cannot get students');  
        }else{
            res.send(students)
        }
    })
}
var editStudent=function(req,res){
    var name=req.body.name;
    var age=req.body.age;
    var school=req.body.school;
    var contact=req.body.contact;
    Students.findOneAndUpdate({name},
    {age,school,contact},
function(err,student){
    if(err){
        res.status(404).send('cannot update students');
    }else{
        res.send(student)
    }
})
}
var deleteStudent=function(req,res){
    var name=req.body.name;
    Students.find({name},function(err,student){
        console.log(student)
        if(err){
            res.status(404).send('cannot delete students');
        }else{
            student.remove(student)
        }
    })
}


module.exports={
    createStudent:createStudent,
    getStudents:getStudents,
    editStudent:editStudent,
    deleteStudent:deleteStudent
}