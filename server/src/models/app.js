const express = require('express')
const app = express()
const cnn = require("./db/conn")
const port = process.env.Port || 3000
app.get("/", (req, res)=>
{
    res.send("this is registeration page")
})

app.listen(port, (req,res)=>
{
    console.log(`listening on port ${port}`);
})