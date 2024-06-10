const express = require('express')
const app = express()
const port = 4000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('C:/Users/rupam/Web Dev/Vring/index.html');
})
app.get('/footage', (req, res) => {
    res.sendFile('C:/Users/rupam/Web Dev/Vring');
  });
app.get('/style1.css', (req, res) => {
    res.sendFile('C:/Users/rupam/Web Dev/Vring/style1.css');
  });
app.get('/editors.html', (req, res) => {
    res.sendFile('C:/Users/rupam/Web Dev/Vring/editors.html');
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})