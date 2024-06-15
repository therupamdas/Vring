import mongoose from "mongoose";
const namepass = new mongoose.Schema({
    name: String,
    password: String
});
export const newname = mongoose.model('newname', namepass);