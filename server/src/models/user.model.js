import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        require : true
    }
},{
    timestamps : true
}) 

const User = mongoose.model('User',UserSchema);

<<<<<<< HEAD
export {User};
=======
module.exports = User;
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
