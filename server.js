require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { log } = require('mercedlogger');
const cors = require('cors');
path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const db = require('./db/connection');
db();




app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


const adminrouter = require('./routes/admin/admin.route');
const menurouter = require('./routes/menu/menu.route');
const basicAuth = require('./encryption-server/basic-auth');

app.use('/admin', basicAuth, adminrouter)
app.use('/menu', basicAuth, menurouter)



app.listen(port, () => log.green('Server is running on port', port));