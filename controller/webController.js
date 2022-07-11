require('dotenv').config()
const nodemailer = require('nodemailer')
const { isValid, isValidEmail, isValidPhone } = require('../utils/validators')

const serveIndex = (req, res, next) => {

    try {

        res.render('index')

    } catch (error) {
        next(error)
    }

}

const formdata = async (req, res, next) => {

    try {

        let data = req.body
        console.log(data)

        if (!isValid(data.name)) {

            req.flash('error', "name Field can-not be empty 😐")
            return res.redirect('/')

        }

        if (!isValid(data.email) || !isValidEmail(data.email)) {

            req.flash('error', "Email Should Be a Valid Email 😐")
            return res.redirect('/')

        }

        if (!isValid(data.phone) || !isValidPhone(data.phone)) {

            req.flash('error', "Phone Should Be A Valid Phone No 😐")
            return res.redirect('/')

        }

        if (!isValid(data.message)) {

            req.flash('error', "Please Fill The Message Field 😐")
            return res.redirect('/')

        }

        const transporter = nodemailer.createTransport({

            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }

        })

        const mailOptions = {

            from: data.email,
            to: "suryask5488@gmail.com",
            subject: `message From ${data.email} : portfolio Form Enquiry`,
            text: ` User Name -> ${data.name}, UsersMobile -> ${data.phone} the Text From User : ${data.message}`

        }

        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {

                console.log(err)
                req.flash('error', 'Something Went Wrong! Mail Has Not Been Sent')
                return res.redirect('/')
            }
            else {

                req.flash('success', "Your Mail Has Recived ! I will Get Back To You ASAP 😀")
                console.log(`Email sent : ${info.response}`)
                return res.redirect('/')

            }

        })

    } catch (error) {
        next(error)
    }

}


module.exports = {

    serveIndex,
    formdata

}