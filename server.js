const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 7000

//read css,js and image
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/image', express.static(__dirname + 'public/image'));

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : true}))

// //routes
const coutryRouter = require('./src/routes/country');
app.use('/', coutryRouter);//Frontpage
app.use('/country', coutryRouter);//eachPage


app.listen(port, () => console.log(`Lisitening port number ${port}`));
