import mongoose from "mongoose";
import env from "dotenv";

env.config();

const connectDB = async () => {
     try{
          await mongoose.connect(process.env.MONGODB_URI || env.MONGODB_URI);
          console.log('Connected to MongoDB');
     }catch(e){
          console.log(`Error encountered while connecting DB: ${e}`);
     }
}

export default connectDB;