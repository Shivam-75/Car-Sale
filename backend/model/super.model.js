import mongoose from "mongoose";

const superCarSchema = new mongoose.Schema({
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
        collection: "supercar"
    });

export const Supercar = mongoose.model("Supercar", superCarSchema);
