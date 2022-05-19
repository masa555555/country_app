const express = require('express');
const countryRouter = express.Router();
const axios = require('axios');

countryRouter.get('', async(req, res) => {
    try {
        const countryApi = await axios.get(`https://restcountries.com/v2/all`);
        // console.log(countryApi.data);
        res.render('home', { countryList : countryApi.data})

    } catch (err) { //error handling
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        } else if(err.request) {
            console.log(err.request)
        } else {
            console.log('ERROR!', err.message)
        }
    }
})

countryRouter.get('/countries', async(req, res) => {
    try {
        const countryApi = await axios.get(`https://restcountries.com/v2/all`);
        // console.log(countryApi.data);
        res.render('countries', { countryList : countryApi.data})

    } catch (err) { //error handling
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        } else if(err.request) {
            console.log(err.request)
        } else {
            console.log('ERROR!', err.message)
        }
    }
})

countryRouter.get('/:name', async(req, res) => {
    //get req and go there
    let countryName = req.params.name;
    try {
        const countryApi = await axios.get(`https://restcountries.com/v2/name/${countryName}`);
        // console.log(countryApi.data);
        res.render('eachCountry', { countryData : countryApi.data})

    } catch (err) { //error handling
        if(err.response) {
            res.render('eachCountry', {countryDta : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        } else if(err.request) {
            res.render('eachCountry', {countryData : null})
            console.log(err.request)
        } else {
            res.render('eachCountry', {countryData : null})
            console.log('ERROR!', err.message)
        }
    }
})

module.exports = countryRouter