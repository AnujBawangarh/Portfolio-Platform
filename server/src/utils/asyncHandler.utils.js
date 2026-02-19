const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((error) => next(error))
    }
}

<<<<<<< HEAD
export {asyncHandler} ;
=======
export default asyncHandler;
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
