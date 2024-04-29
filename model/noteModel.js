const mongoose =require("mongoose")

const noteSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    Date:{type:Date,default:Date.now},
    userID:{type:String},
    username:{type:String}
})

const noteModel= mongoose.model("NoteUser",noteSchema)

module.exports=noteModel