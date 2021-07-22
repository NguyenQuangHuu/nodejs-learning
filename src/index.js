const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const db = require('./config/db')
const route = require('./routes');

//connect DB
db.connect();

const handlebars = require('express-handlebars');



const port = 3000;

//Use public image static file
app.use(express.static(path.join(__dirname,'public')));

//Templates Engine
app.engine('hbs',handlebars({
    extname : '.hbs'
}))
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources/views'));

//HTTP Logger

// app.use(morgan('combined'));

//Connection

route(app);


app.listen(port,() => console.log(`Example server listen at localhost:${port} `));