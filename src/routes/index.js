const newsRouter = require('./news');

const sitesRouter = require('./sites');

const coursesRouter = require('./courses');

function route(app){

    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);
    
    //Server handler
    app.use('/', sitesRouter);
}

module.exports = route;
