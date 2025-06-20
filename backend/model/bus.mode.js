import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
},
    {
        collection: "bus"

    }
)

export const Bus = mongoose.model("bus", BusSchema);