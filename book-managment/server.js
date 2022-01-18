require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require("mongoose")

//allow cros only for testing 
app.use(cors())


// where the app listen port
app.listen(3000)
app.use(express.json())

// DB connections 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
        mongoose.connection.once('open', function(){
        console.log('Conection has been made!');
            })

    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();


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