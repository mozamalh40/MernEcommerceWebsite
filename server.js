const express = require("express");
const connectDb=require('./config/db.js')
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes=require('./Routes/userRoutes')
const productRoutes = require('./Routes/ProductRoutes')
const orderRoutes = require("./Routes/orderRoute");
const paymentRoutes = require("./Routes/paymentRoute");
const categoryRoutes = require("./Routes/categoryRoutes");
const cartRoutes = require("./Routes/WishListRoutes");
const errorMiddleware = require("./Middleware/error");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const cors=require('cors')
const path=require('path')


// Config
require("dotenv").config({ path: "./config/config.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


  const app = express();
  
  app.use(bodyParser.urlencoded({ extended: false }))
  
// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload());
connectDb()

// CloudNairy Images Upload 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Backend Routes
app.use("/api/v1",productRoutes)
app.use("/api/v1",userRoutes)
app.use("/api/v1",orderRoutes)
app.use("/api/v1",paymentRoutes);
app.use("/api/v1",categoryRoutes);
app.use("/api/v1",cartRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"/client/build")))

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'client' , 'build' , 'index.html'))
  })
}else{
  app.get('/',(req, res)=>{
    res.send("api is running")
  })
}


app.use(express.json())

// Middleware for Errors
app.use(errorMiddleware);

// PORT
const PORT=process.env.PORT || 3000;


app.listen( PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
