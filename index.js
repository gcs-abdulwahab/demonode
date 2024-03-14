import express from 'express'
const app = express()

app.get('/',  (req, res) => {
  res.json({ message: 'Hello World' })
})

app.post('/', function (req, res) {
    res.send('Hello World Post method')
  })

  app.get('/user/:uid', function (req, res) {
    res.send('Got a GET request at /user'  + req.params.uid)
  })


app.listen(3000)