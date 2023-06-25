import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.stringMongoDB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB".blue)
    } catch (error) {
        throw new Error(error)
    }
}

export default connectionDB