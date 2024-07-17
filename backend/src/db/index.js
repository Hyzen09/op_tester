import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionEnstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`database connected at${connectionEnstance.connection.host}`)
    } catch (error) {
        console.log("failed to connect to database")
        process.exit(1)
    }

}
export default connectDB