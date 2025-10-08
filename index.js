const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require('./routes/product.route.js');
dotenv.config();
const app = express()

// middleware
app.use(express.json());

// routes
app.use('/api/products', productRoute);

// test the api
app.get('/',(req,res)=>{
    res.send("Hello this is my Simple Crud Operation API");
});

// connection to the database
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
    console.log("Connected to the Datatbase !")
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("Connection failed !",err);
});
