const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://Aman123:aman@cluster0.v2cb4.mongodb.net/mvcdatabase?retryWrites=true&w=majority"
    );
};

module.exports=connect;