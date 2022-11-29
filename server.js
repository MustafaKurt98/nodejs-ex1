require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { log } = require('mercedlogger');
const cors = require('cors');
const adminRouter = require('./routes/auth');
path = require('path');

const port = process.env.PORT || 3000;
const app = express();

const db = require('./db/connection');
db();



app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

const adminrouter = require('./routes/auth');
app.use('/auth', adminrouter)

app.get('/', (req, res) => {
    res.send('test route');
}
);

app.listen(port, () => log.cyan('Server is running on port', port));