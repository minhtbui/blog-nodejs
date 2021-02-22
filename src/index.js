const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const sortMiddleware = require('./app/middleware/sortMiddleware');
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

// custom middleware
app.use(sortMiddleware);

// http logger
app.use(morgan('combined'));

// template engigne setup
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                // check which field to sort
                const sortedField =
                    field === sort.field ? sort.type : 'default';

                const icons = {
                    default: 'bi bi-funnel',
                    asc: 'bi bi-sort-down-alt',
                    desc: 'bi bi-sort-down',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortedField];
                const type = types[sortedField];

                return ` <a href="?_sort&field=${field}&type=${type}"><i class="${icon}"></i></a>`;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// routers
route(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
