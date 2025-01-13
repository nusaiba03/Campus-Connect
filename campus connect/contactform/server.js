const express = require('express'); // bring in express 
const app = express(); //gives app veriable access to express functions, like get request , post req etc. 

 
//bring nodemailer 
const nodemailer = require("nodemailer"); 


//in produ this port is going to be envior.variable port num, otherwise in  
//dev mode were saying use port 8000, why dont u want it to use port 5000? 
const PORT = process.env.PORT || 8000;  

 
//MIDDLEWARE  
app.use(express.static('public')); 
app.use(express.json()) 

//when we send get req, root dir of website , passing request in respone  
app.get('/', (req,res)=>{ 
    res.sendFile(__dirname + '/public/contactform.html') // send text to browser 
}) 

//create a post route  
app.post('/', (req, res)=>{ 
    // using express.json to read json content in request.body 
    console.log(req.body)  

    const transporter = nodemailer.createTransport({ 
        //service were using  
        host: 'smtp.gmail.com', 
        port: 465, 
        secure: true, 
        auth: { 
            user:'connectcampus43@gmail.com', 
            pass: 'hlau utuv zgnv whvv' 
        } //take in authorisation credetnils , object 
    }) 


    transporter.sendMail({ 
        to:'connectcampus43@gmail.com', 
        subject:`Message from ${req.body.email}:  ${req.body.subject}`, //passed in with template literals, 
        text: req.body.message 
    }).then(() => { 
        console.log('Email has sent'); 
    }).catch(err =>{ 
        console.error(err); 
    }) 


}) 

 

app.listen(PORT, ()=>{ 

    console.log(`Server running on port ${PORT}`) // template literal, passing PORT 

}) 