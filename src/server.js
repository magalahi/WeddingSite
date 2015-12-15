var express = require('express')
var app = express()

app.get('/', function (req, res){
  var obj = {
    'name': 'Daniel',
    'hair': 'Black',
    'age': 27,
    'male': true,
    'hobbies': [
      {
        'name':'gaming',
        years: 2
      },
      'long walks on the beach'
    ]
  }
  res.send(obj)
})

app.get('/bye', function (req, res){
  res.send('Bye World')
})

app.post('/bye', function (req, res){
  res.send('foo')
})

app.get('/:id', function (req, res){
  res.send(req.params.id)
})


app.listen(3000)
