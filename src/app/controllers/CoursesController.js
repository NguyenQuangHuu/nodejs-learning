const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController{

    //[Get] /course/:slug
    index(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then(course => res.render('details/course',{course: mongooseToObject(course)}))
        .catch(next);
        
    }
}

module.exports = new CourseController;