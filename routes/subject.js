"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models')

router.get('/', (req, res)=>{
  model.Subject.findAll()
  .then(subjects => {
  // res.send(teachers)
    res.render('subject', {dataSubject: subjects, title:'Data Subject'})
  })
  .catch(err =>{
    console.log(err);
  });
});


module.exports = router
