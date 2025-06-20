import { Supercar } from "../model/super.model.js"
import { Superbike } from "../model/superbike.mode.js";
import { Thor } from "../model/thor.model.js";
import {Bus} from "../model/bus.mode.js"

export const superCar = async (req, res) => {
    try {
        const car = await Supercar.find();
        if (!car) {
            return res.status(401).json({
                message: "Super car data not Found ",
                success:false
            })
        }
        res.status(201).json({
            message: " car data ",
            success: true,
            car
        })
    }
    catch (err) {
        return res.json(err.message);
    }
}

export const superBike = async (req, res) => {
    try {
        const bike = await Superbike.find();
        if (!bike) {
            return res.status(401).json({
                message: "Super car data not Found ",
                success: false
            })
        }
        res.status(201).json({
            message: " bike data ",
            success: true,
            bike
        })
    }
    catch (err) {
        return res.json(err.message);
    }
}
export const Thors = async (req, res) => {
    try {
        const thor = await Thor.find();
        if (!thor) {
            return res.status(401).json({
                message: "Super thor data not Found ",
                success: false
            })
        }
        res.status(201).json({
            message: " bike data ",
            success: true,
            thor
        })
    }
    catch (err) {
        return res.json(err.message);
    }
}

export const Buss = async(req, res) => {
    try {

        const data = await Bus.find();
        if (!data) {
            return res.status(401).json({
                message:"bus data not found"
            })
        }

        res.json({
            message: "successfull data fetched",
            success: true,
            data
        })
        
    } catch (err) {
        res.json("server error",err)
    }
}