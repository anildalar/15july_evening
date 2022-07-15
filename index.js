//onsole.log('Its working');
//Import area
const express = require('express');
const app = express();
require('dotenv').config()

console.log(process.env);
let PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`The application is running on port ${PORT}`);
}); //ES6 Fat Arrow functin