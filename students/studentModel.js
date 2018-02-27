

var mongoose=require('mongoose');

var Schema= mongoose.Schema;

var studentModel=new Schema({
    name:String,
    age:String,
    school:String,
    contact:String
});
module.exports=mongoose.model("student",studentModel)