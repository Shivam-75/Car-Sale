import bcrypt from "bcryptjs";
import { Register } from "../model/register.js"
import jwt from "jsonwebtoken"
import { response } from "express";
import { registry } from "zod/v4";

//! registration apies------

export const register = async (req, res) => {
    try {
        const { emailId, username, password, mobile } = await req.body;

        if (!emailId || !username || !password || !mobile) {
            return res.status(400).json({
                message: "please fill the all column",
                success: false
            })
        }

        const userExist = await Register.findOne({ $or: [{ emailId }, { mobile }] });
        if (userExist) {
            return res.json({
                message: "User Exist Please Try Again ",
                success: true,
            })
        }
        const newPassword = await bcrypt.hash(password, 10);
        const users = await Register.create({
            emailId,
            username,
            password: newPassword,
            mobile,
        })

        res.status(201).json({
            message: "User Register Successfuly",
            data: users
        })

    } catch (err) {
        return res.status(500).json({
            message: "server error ",
            success: false,
            err: err.message
        })
    }
}


//? login api-------

export const login = async (req, res) => {
    if (req.user) {
        return res.json({
            message: "user already logdin"
        })
    }
    try {
        const { emailId, password, mobile } = req.body;

        if (!emailId || !password || !mobile) {
            return res.status(401).json({
                message: "Please fill the column",
                success: false
            })
        }
        const userDetail = await Register.findOne({ emailId, mobile });
        if (!userDetail) {
            return res.status(401).json({
                message: "User not Exist",
                success: false
            })
        }
        const checkPassword = await bcrypt.compare(password, userDetail.password);
        if (!checkPassword) {
            return res.status(401).json({
                message: "invalid User Password",
                success: false
            })
        }
        const token = await jwt.sign({
            id: userDetail._id.toString(),
            mobile: userDetail.mobile,
            email: userDetail.emailId,
            isAdmin: userDetail.isAdmin
        }, process.env.CODE, {
            expiresIn: "1d"
        })

        res.status(201).json({
            message: " User login Successful ",
            success: true,
            token: token,
        })


    } catch (err) {
        return res.status(500).json({
            message: "backend error"
        })
    }
}

//? user admin or not

export const getdata = async(req, res) => {
    try {
        const User = await Register.find();
        if (!User) {
            return res.status(401).json({
                message: "user not found",
                success:false
            })
        }
        res.status(200).json({
            message: "data found",
            success: true,
            data:User
        })
    }
    catch (err) {
        return res.json({
            message: "server error getdata",
            exter:err.message
        })
    }
}

//? login persion name

export const persion = async(req,res) => {
    try {
        const data = await req.user;
        if (!data) {
            return res.status(401).json({
                message: "unAuthorized http access",
                success:false
            })
        }
        res.status(201).json({
            message: " Person data",
            success: true,
            user: data
        })
        
    } catch (err) {
        res.json("server get peron",err)
    }
}