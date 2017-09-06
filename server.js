var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();

//jen-calls being counted on the terminal with console.log
var jenCount = 0;
//return an object from the server that has the number of 
//times the route has been called
var jenObject = {
  calls: 0
};

app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

app.get('/jen', function (req, res) {
  // this is the root url
  console.log('request for Jen received');
  jenCount += 1;
  jenObject.calls = jenCount;
  console.log('Jen-Call Counts:', jenCount);



  res.send(jenObject);
  });
  
  // create a counter in server.js that counts how many times 
  //the get route has been called and show in terminal with console.log
