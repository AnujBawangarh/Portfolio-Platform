import  asyncHandler  from "../utils/asyncHandler.utils.js";
import User  from "../models/user.model.js"
import ApiError  from "../utils/apiError.utils.js";
import ApiResponse  from "../utils/apiResponse.utils.js";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        throw new ApiError(400,"Enter all fields");
    }
    

    const userExist = await User.findOne({
        $or : [{name},{email}]
    })

    if(userExist){
        throw new ApiError(400,"User already exist");
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds); 
    const hashedPassword = await bcrypt.hash(password,salt);

    const regUser = await User.create({
        name : name.toLowerCase(),
        email,
        password : hashedPassword 
    })

    const createUser = await User.findById(regUser._id);
    console.log(createUser);
    

    if(!createUser){
        throw new ApiError(400,"User account not created");
    }

    return res.status(201).json(
        new ApiResponse(200,createUser,"User is Resgistered Successfully")
    )
})

export default registerUser;