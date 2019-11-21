// library imports
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const bodyParser = require('body-parser');
const dotEnv = require('dotenv');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

dotEnv.config();

// DB connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => console.log('Connected to mongo Atlas'));

// module imports
const authRoute = require('./routes/auth.route');
const userModel = require('./models/user');


app.use(express.json());



// Authenticate the user
app.use('/api/user', authRoute);


// Start the server
app.listen(3000, () => console.log('Started Server at 3000'));
