const express = require('express');
const Mongoose = require('mongoose');
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const config = require('config');
const auth = require('./routes/api/auth');

const app = express();

app.use(express.json());

//Db Config

const db = config.get('mongoUri');

Mongoose.connect(db,
        {
          useNewUrlParser: true,
          useCreateIndex: true
        })
    .then(() => console.log("Connected"))
    .catch((err) => console.log("error occured ", err))

// Redirection
app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log("Server Started");
})
