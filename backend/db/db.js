import mongoose from "mongoose";

export const db = async (url) => {
    try {
       await mongoose.connect(url);
        console.log("databse connected successfully ........");
    }
    catch (err) {
        console.log("database error", err);
    }
}