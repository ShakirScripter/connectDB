

const mongoose=require('mongoose');



//define new schema ;
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        min:18
    },
    studentID:{
        type:Number,
        length:9,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:15
    },

    subjects:[String],
},{versionKey:false,timestamps:true});

//convert it into module so that we can export it anywhere;
module.exports=mongoose.model("studentInfo",studentSchema);

/**
 * ("studentInfo")=>here it is name of collection;
 */