var express = require( 'express' )
var app = express()

app.get( '/', (req, res) => {
  res.send('Hello Mundo')
} )

app.listen(4000)