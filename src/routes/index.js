const newsRouter = require('./news');

const sitesRouter = require('./sites');

function route(app){

    app.use('/news', newsRouter);
    
    //Server handler
    app.use('/', sitesRouter);
}

module.exports = route;
