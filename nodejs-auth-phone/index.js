'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const loginRoutes = require('./routes/login-routes');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', loginRoutes.routes);


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));