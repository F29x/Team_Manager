import mongoose from "mongoose";


const connectDB = async ()=>{
   try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Team_ManagerDB");
    console.log("Estabilshed connection with database")
    
   } catch (error) {
    console.error("Something went wrong when connecting to the database", err);
    process.exit(1);
   }
}
     
export default connectDB;
