import User from "../models/user.model.js";
import ApiError from "../utils/apiError.utils.js";
import ApiResponse from "../utils/apiResponse.utils.js";
import asyncHandler from "../utils/asyncHandler.utils.js";

const login = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;

    console.log(name,email,password);
    
    if(!name || !password || !password){
        throw new ApiError(400,"Enter all fields");
    }

    const userExist = await User.findOne({
        $or : [{name} || {email} , {password}]
    })

    if(!userExist){
        throw new ApiError(400,"You are not a User, kindly please register yourself");
    }

    const logInUser = await User.findById(user._id);

    return res.json(
        new ApiResponse(
            202,{
                user : logInUser
        }, 
            "User LoggedIn Successfully"
        )
    )
})

export default login;