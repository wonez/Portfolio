const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res)=>{
    res.redirect('/projects')
})

router.get('/projects', (req, res)=>{
    res.render('projects', {projects: true});
})

router.get('/about', (req, res)=>{
    res.render('about', {about: true});
})

router.get('/contact', (req, res)=>{
    res.render('contact', {contact: true});
})

router.post('/form', (req, res)=>{
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        secure: false,
        auth: {
            user: 'ffazlicme@gmail.com',
            pass: 'Ffazlic123me'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"ffazlic.me " <ffazlicme@gmail.com>',
        to: "ffazlic@yahoo.com", 
        subject: "New Message On Portfolio Site",
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}\n`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(!err){
            res.render('contact', { redirect: true, contact: true })    
        }
    })
})

router.get('*', (req, res) => {
    res.redirect('/');
})

module.exports = router;