'use strict';

console.log('proof of life');
// normally requires are at the top
// in our servers, we must use require instead of import
// to create server, bring in Express

const express = require('express');

// once we have npm express , we must use express

const app = express();

// bring in the npm dotenv if were are going to use .env
// as per teh docs chain config
require('dotenv').config();
// add 3002 to see if server is working
const PORT = process.env.PORT || 3002;



// create basic default route
app.get('/',(request, response) => {
  response.send('hi, how you doin?');
})

// have a cathch all route

app.get('/banana' ,(request, response) =>{
  response.send('Here is yor banana: Banana')
})

// usally ubonve
// let data = require('.data/pets.json');

app.get('/pet' ,(request, response) =>{
  let species = request.query.species;
  // console.log(species);
  // filter data coming in
  let dataToSend = data.find(pet => pet.species === species)
  response.send(dataToSend);
})



// build say hello route

app.get('/sayHello' ,(request, response) =>{
  console.log(request.query);
  let name = request.query.name;
 response.send(`HI ${request.query.name}`)
 
})
// add local host error message
app.get('*',(request, response) =>{
  response.send('not sure what your looking for')
})




app.listen(PORT,() => console.log(`listewn test on port ${PORT}`))