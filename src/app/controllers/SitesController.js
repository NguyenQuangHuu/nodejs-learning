const Course = require('../models/Course')

const {multipleMongooseToObject} = require('../../util/mongoose')

class SitesController{


    //[GET] home
    home(req, res, next){


        // Course.find({},function(err,courses){
        //     if(!err) res.json(courses)
        //     else{
        //         res.status(400).json({error: 'ERROR'})
        //     }
        // })

        Course.find({})
            .then(courses => {
                res.render('home',
                {courses : multipleMongooseToObject(courses)});
            })
            .catch(error => next(error));
        // res.render('home');
    }

    search(req,res){
        res.render('search');
    }
}

module.exports = new SitesController;