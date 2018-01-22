const knex = require('./db'),
      express = require('express'),
      app = express();

const PORT = process.env.PORT || '8000';

app.listen(PORT, function () {
  console.log('SERVER is up and running', PORT);
});

//========source===============//
//https://gist.github.com/OfTheDelmer/4c87593b07e4516eab6f7ead604e1522
