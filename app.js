var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

const index = require('./routes/index');
app.use('/', index)

let teacher = require('./routes/teacher');
app.use('/teachers', teacher)

let subject = require('./routes/subject');
app.use('/subjects', subject);

let student = require('./routes/student');
app.use('/students', student)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
