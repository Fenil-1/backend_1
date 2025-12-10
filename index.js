const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
    
})

app.get('/login' , (req,res)=>{
 res.send("login hai bhaiya!!")
})
app.get('/homepage',(req,res)=>{
    res.send(`<h1>hogaya jii!!</h1>`)
})