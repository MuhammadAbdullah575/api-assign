const mongoose= require('mongoose');
//schema
const PostSchema= mongoose.Schema({
    title:{
     type:String,
     required:true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }

});
//name of the data base "posts"
module.exports=mongoose.model('Posts',PostSchema);