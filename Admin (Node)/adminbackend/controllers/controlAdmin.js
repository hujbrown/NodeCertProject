const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
const News = require('../models/news');

// Has environment variables
const config = require('../config');

exports.dashboard = (req, res, next) => {
    console.log('called dashboard')
    res.status(200).render('dashboard',{errorMsg: null, successMsg: null, isLoggedIn: true});
    //res.status(200).render('add', { title: 'Publish Article', errorMsg: null, successMsg: null, isLoggedIn: true });
}


exports.getNewsForm = (req, res, next) => {
    console.log('called news form')
    res.status(200).render('add', { title: 'Publish Article' });
}

exports.getNewsList = (req, res, next) => {
    console.log('called news list')
    News.find({}, (err, newsData)=>{
        if(!err){
          //console.log(newsData);
          res.status(200).render('homepage', { title: 'News List', newsData: newsData });
          //console.log(newsData);
          //res.status(200).json(newsData);
        }
        else{
          res.json(err);
        }
    })
    
    
    
    //res.status(200).render('homepage', { title: 'Publish Article' });
}