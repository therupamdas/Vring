import express from 'express';
const app = express()
const port = 3000
app.use(express.static('C:/Users/rupam/Web Dev/Vring/'));

import mongoose from "mongoose";
let conn = await mongoose.connect("mongodb://localhost:27017/VringDatabase");
import { newname } from "./models/namepass.js";

app.get('/', (req, res) => {
  const namepass = new newname({ name: "Goku", password: "chichi" });
  namepass.save();
})

app.listen(port, () => {
  console.log(`Listening on the port ${port}`)
})