const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
app.use(
    cors({
        methods: "*",
        origin: "*",
        allowedHeaders: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/' ,(req, res)=>{
    res.send('Its alive!')
});

app.use('/auth', authRoutes);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));