class resultController
{
    constructor(req, res ,next)
    {
        super(req, res ,next);
    }

    index(){
        this.res.render('insert');
    }
}