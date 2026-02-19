class ApiResponse {
    constructor(
        statuscode,
        message = "Success",
        data
    ) {
        this.statuscode = statuscode
        this.data = data
<<<<<<< HEAD
        this.message = message
=======
        this.message = Message
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
        this.success = statuscode < 400
    }
}

<<<<<<< HEAD
export {ApiResponse}
=======
export default ApiResponse;
>>>>>>> 41e81f22d789755813b2420b22fa7d77bbecd018
