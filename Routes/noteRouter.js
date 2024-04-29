const {Router}=require("express")
const noteModel=require("../model/noteModel")
const auth=require("../middlewares/auth.middleware")
const noteRouter=Router()

noteRouter.post('/create',auth,async(req,res)=>{
    const {title,description,userID,username}=req.body;

    try {
        const note=new noteModel({title,description,userID,username})
        await note.save()
        res.status(201).json({message:"Note Created Successfully"})
    } catch (error) {
        res.status(500).json({message:"Error while creating the note"})
    }
})

noteRouter.get('/',auth,async(req,res)=>{
    const {userID,user}=req.body
try {
    const note=await noteModel.find({userID})
res.status(200).json({message:"All the Notes",note})
} catch (error) {
    res.status(500).json({message:"Error While getting the notes",error})
}
})

noteRouter.patch('/update/:id',auth,async(req,res)=>{
    const {id}=req.params
try {
     await noteModel.findByIdAndUpdate({_id:id},req.body)
     res.status(200).json({message:"Note Updated Successfully "})
} catch (error) {
    res.status(500).json({message:"Error while Updating the note",error})
}
})


noteRouter.get('/',auth,async(req,res)=>{
    try {
        const note=await noteModel.find()
    res.status(200).json({message:"All the Notes",note})
    } catch (error) {
        res.status(500).json({message:"Error While getting the notes",error})
    }
    })
    
    noteRouter.delete('/delete/:id',auth,async(req,res)=>{
        const {id}=req.params
    try {
         await noteModel.findByIdAndDelete({_id:id})
         res.status(200).json({message:"Note deleted Successfully "})
    } catch (error) {
        res.status(500).json({message:"Error while deleting the note",error})
    }
    })

module.exports=noteRouter