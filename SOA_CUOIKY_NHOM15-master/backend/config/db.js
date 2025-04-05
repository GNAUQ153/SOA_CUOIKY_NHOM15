import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://thainguyen31221023457:87654321@cluster0.y8oor8s.mongodb.net/e_ecommerce_vite').then(()=>console.log("DB Connected"));
}