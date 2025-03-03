import mongoose from "mongoose";

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://nirajmail97:yadav2020@cluster0.otkpf.mongodb.net/').then(()=>console.log('Connected to DB'))
    
}
export default connectDB
