import mongoose from "mongoose";

const superBikeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
},
    {
        collection: "bike"
    });

export const Superbike = mongoose.model("bike", superBikeSchema);
