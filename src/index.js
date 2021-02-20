const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const route = require('./routes/index');
const db = require('./config/db');
const methodOverride = require('method-override');

// connect db
db.connect();

// middleware for METHOD request
app.use(methodOverride('_method'));

// middleware for POST request
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
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// routers
route(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
