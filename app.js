'use strict';

const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {'encoding': 'utf8'});
readable.on('data', (chunk)=> {
  console.log(chunk);
});