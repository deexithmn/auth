// library imports
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotEnv = require('dotenv');

dotEnv.config();

// DB connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => console.log('Connected to mongo Atlas'));

// module imports
const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
const userDetailsRoute = require('./routes/get-user-details.route');


app.use(express.json());



// Authenticate the user
app.use('/api/user', registerRoute);
app.use('/api/user', loginRoute);
app.use('/api/user', userDetailsRoute);


// Start the server
app.listen(process.env.PORT || 3000, () => console.log('Started Server at 3000'));
