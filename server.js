/* const express = require('express') */
/* const colors = require('colors') */
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

app.use(cors(
    {
        origin: ["https://mern-stack-ecommerce-app-vercel-q6t2pdkzz-seriskeys-projects.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app MERN STACK Project</h1>")
});

//port
/* const PORT = 8080; */
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
});