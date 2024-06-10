import express from 'express';
const app = express()
const port = 3000

app.use(express.static('C:/Users/rupam/Web Dev/Vring/'));

import mongoose from "mongoose";
let a = await mongoose.connect("mongodb://localhost:27017/VringDatabase");


app.get('/', (req, res) => {
  res.sendFile('C:/Users/rupam/Web Dev/Vring/index.html');
})
app.get('/style1.css', (req, res) => {
  res.sendFile('C:/Users/rupam/Web Dev/Vring/style1.css');
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
