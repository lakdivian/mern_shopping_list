const express = require('express');
const Mongoose = require('mongoose');
const bodyparser = require('body-parser');
const items = require('./routes/api/items');


const app = express();

app.use(bodyparser.json());

//Db Config

const db = require('./config/keys').mongoUri;

Mongoose.connect(db)
    .then(() => console.log("Connected"))
    .catch((err) => console.log("error occured ", err))


app.use('/api/items', items);
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log("Server Started");
})