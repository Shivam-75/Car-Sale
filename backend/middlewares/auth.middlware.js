import jwt from "jsonwebtoken";
import { Register } from "../model/register.js";
import { ca } from "zod/v4/locales";
export const AuthMiddlware = async(req, res, next) => {
    try {

        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({
                message: "unAthrized http request",
                success:false
            })
        }
        const jwtToken = token.replace("Bearer", "").trim();

        const verifyToken = jwt.verify(jwtToken, process.env.CODE);
        
        const tokenUser = await Register.findOne({ emailId: verifyToken.email, mobile: verifyToken.mobile }).select({password:0});

        req.token = token;
        req.user = tokenUser;
        next();
        
    } catch (err) {
        return res.status(501).json({
            message: "unathorized access invalid token",
            success:false
        })
    }
}

export const AuthAdmin = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            return res.status(401).json({ message: "Access denied user not a admin" });
        }
        next();
        
    } catch (err) {
        return res.json(err);
    }
}