const express = require('express');
const app = express();
require('dotenv').config();//it is required as .env file is to be used

app.use(express.json());

const port = process.env.PORT || 4000;

app.use('/',require('./app/routes'));

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});