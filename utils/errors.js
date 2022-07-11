
/*                                         Error Handlers                                                      */

const createError = require('http-errors')

const notFound = (req, res, next) => {
    next(createError(404, 'The Page You are Looking for is Not Found'))
}

const errorHandler = (err, req, res, next) => {

//    req.flash('error' , "something Went Wrong")
//    res.redirect('/')
    res.render('error_40x.ejs')

}

/*                                          Exporting To Index.js                                        */

module.exports = {

    notFound,
    errorHandler

}