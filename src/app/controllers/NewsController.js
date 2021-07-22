
class NewsController{

    //[Get] method
    index(req,res){
        res.render('news');
    }

    //[GET] :slug method
    show(req,res){
        res.render('show');
    }

}

module.exports = new NewsController;