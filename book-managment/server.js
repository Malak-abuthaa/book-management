const express = require('express')
const app = express()

// where the app listen port
app.listen(3000)

// get
app.get("/", (req, res)=>{
console.log("get request procced")
// in case of sending status through the res --> res.status(500).send("error")

res.json({massage: "error"})

})

// books router
const bookRouter = require('./routes/books')
app.use('/',bookRouter)

//auther router 
const authorRouter = require('./routes/author')
app.use('/',authorRouter)





console.log("test ");