import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = process.env.PORT || 8000;
import cors from 'cors'


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }
))



//database connection
import connectDB from "./config/db.js";
connectDB();

//Routes
import ContactRoute from './routes/contact.route.js'
app.use('/api', ContactRoute)





//test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
