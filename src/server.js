var fs = require('fs')
var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(jsonParser)
var itemsPath = path.resolve(__dirname, '../json/items.json')

var items = JSON.parse(fs.readFileSync(itemsPath, 'utf-8'))

app.get('/api/items', function(req, res){
  res.status(200)
  res.send(items)
})

app.post('/api/items', function(req, res){
  items.push(req.body)
  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2), 'utf-8')
  res.status(200)
  res.send('Great Success!')
})


app.listen(3000)
