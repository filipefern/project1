require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3333);
})
.catch(err => console.log(err));
