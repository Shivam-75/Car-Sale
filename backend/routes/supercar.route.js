import express from "express";
import { Buss, superBike, superCar, Thors } from "../controllers/car.controller.js";

export const carRoute = express.Router();

carRoute.get("/supercar",superCar)
carRoute.get("/superbike",superBike)
carRoute.get("/thor",Thors)
carRoute.get("/bus",Buss)