const express = require('express');
const hbs = require('hbs');
var app = express();
const port  = process.env.port || 3000;
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

app.use((req,res,next) =>{
    console.log(`${req.method}` + " "+ `${req.url}`);
    next();
})

app.use((req,res,next) =>{
    console.log(new Date().toString())/*
    res.render('maintenance.hbs', {
        errorMessage:"your government ban in your country..."
    })
    */
   next();
})





hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})
app.get('/',(req,res) =>{
    res.send({
        name:"Vishesh Mishra",
        hobbies:[
            "Internet Surfing",
            "Learning Node"
        ]
    })
})

app.set('view engine','hbs');



app.get('/about', (req,res) =>{
    res.render('about.hbs',{
        header:'Header Content',
        pageTitle:'About Page',
        contents:'Even I am confused, who I am....'
    })
})

app.get('/home',(req,res) =>{
	res.render('home.hbs', {
        name:'vishesh mishra',
        header:'Header Content',
		choice1:"AngularJS",
		choice2 :"Angular 2",
		choice3:"Node",
        choice4:"React"
	})
})

app.get('/project',(req,res) =>{
    res.render('portfolio.hbs',{
        project_name:'Shiksha',
        developer:'Vishesh',
        Technology:'NodeJS',
        Version:9  
    })
})


app.listen(port,() =>{
    console.log(`server running on port no ${port}`);
});