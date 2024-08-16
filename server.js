const express = require('express') // add express package this is one function
const app = express() //store function in app variable so use evrywhere app allfunctionality store in app
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3001 //if port is not in env. variable then use 3000 as port

//set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))    //set views folder path
app.set('view engine','ejs')    //define which template engine use

//set route after setting template engine
//set route for home page
app.get('/', (req,res) =>{
    //res.json("hello from server")
    res.render('home')   //file name to render on that file
})
app.get('/login',(req,res)=>{
   res.render('auth/login')
})
app.get('/cart',(req,res)=>{
    res.render('customers/cart')
 })
 app.get('/register',(req,res)=>{
    res.render('auth/register')
 })

//assets
app.use(express.static('public'))

//create server 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
