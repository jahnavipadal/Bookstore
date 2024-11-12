import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from './routes/book.route.js'
import cors from "cors"
const app = express();
dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 8080
const MongoURI = process.env.MONGODB_URI

//connect to MongoDB
try {
    mongoose.connect(MongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
} catch (error) {
    console.log(error)
}

// define routes
app.use('/book', bookRoutes)


app.get('/',(req,res)=>{
    res.send('<h1 style="text-align:center;">i am able to see you!</h1>')
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
