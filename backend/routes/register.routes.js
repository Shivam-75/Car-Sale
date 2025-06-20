import express from "express";
import { getdata, login, persion, register } from "../controllers/register.controller.js";
import { AuthMiddlware } from "../middlewares/auth.middlware.js"
import { AuthAdmin } from "../middlewares/auth.middlware.js"


export const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/loginss", login);


//? admin root
userRoute.get("/Admin", AuthMiddlware, AuthAdmin, getdata);
userRoute.get("/persion", AuthMiddlware,persion)
