<<<<<<< HEAD
class ApiError extends Error {
=======
class ApiError extends error {
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
    constructor(
        statuscode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ) {
        super(message)
        this.statuscode = statuscode,
        this.message = message,
        this.error = error,
        this.data = null,
        this.success = false

        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

<<<<<<< HEAD
export {ApiError};
=======
export default ApiError;
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
