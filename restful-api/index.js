const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const router = require('./routes');

const { NODE_LOCAL_PORT} = process.env;

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204
}));

app.use('/api/appointmentService', router);

const port = NODE_LOCAL_PORT || 3001;

app.listen(port, () => {

  console.log(`Appointment Service listening on port ${port}...`)

});
