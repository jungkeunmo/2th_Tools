import mongoose, { Schema } from "mongoose";

const SChema = mongoose.Schema;

const Tools = new Schema({

    name: {
        type : String,
        required: true,
    },
    price: {
        type : Number,
        required: true,
    },
},{versionKey: false});

export default mongoose.model(`Tools`, Tools, `Tools`);