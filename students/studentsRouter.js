var express=require('express');

var studentsController=require('./studentsController');
 
var studentsRouter=express.Router();

studentsRouter.route('/addstudent')
.post(studentsController.createStudent);
studentsRouter.route('/getstudents')
.get(studentsController.getStudents);
studentsRouter.route('/editstudent')
.patch(studentsController.editStudent);
studentsRouter.route('/deletestudent')
.delete(studentsController.deleteStudent);



module.exports=studentsRouter;