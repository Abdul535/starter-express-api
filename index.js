const express = require('express') 
require('dotenv').config()
console.log(process.env)
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(process.env.MONGO_URI)
})
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listen on port 3000")
})
