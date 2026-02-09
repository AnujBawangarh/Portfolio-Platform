import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectionLink = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`MongoDB connected successfully to ${connectionLink.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;