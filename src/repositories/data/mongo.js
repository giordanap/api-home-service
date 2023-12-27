import mongoose from "mongoose";
import environment from "../../common/enviroment.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(environment.mongo_url);
    console.log('database conected!')
  } catch (error) {
    console.log(error);
  }
}; 
