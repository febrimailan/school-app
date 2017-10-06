"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models')

router.get('/', (req, res)=>{
  model.Teacher.findAll()
  .then(teachers => {
  // res.send(teachers)
    res.render('teacher', {dataTeacher: teachers, title:'Data Teacher'})
  })
  .catch(err =>{
    console.log(err);
  });
});


module.exports = router
