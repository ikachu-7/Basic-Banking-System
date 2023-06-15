const express = require('express');
const router = require('./routes/userRoutes');
const { connectDB } = require('./config/db');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 7000;


app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
    try {
        await connectDB();
        app.listen(port,()=>{
            console.log(`server running at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();