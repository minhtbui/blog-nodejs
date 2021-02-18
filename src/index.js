const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

const route = require('./routes/index');
const db = require('./config/db');

// connect db
db.connect();

//middleware for POST request
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//static files config
app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

// template engigne setup
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// routers
route(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
