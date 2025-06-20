import mongoose from "mongoose";
import { boolean } from "zod/v4";

const registerSchema = new mongoose.Schema({
    emailId: {
        type: String,
        require: true,
        unique: true 
    },
    username: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    mobile: {
        type: Number,
        require: true,
        unique:true
    },
    isAdmin: {
        type: Boolean,
        default:false
    }

})

export const Register = mongoose.model("Register", registerSchema)

