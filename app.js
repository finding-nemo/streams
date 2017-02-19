'use strict';

const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {'encoding': 'utf8'});

let writable = fs.createWriteStream(__dirname + '/greet2.txt');

readable.on('data', (chunk)=> {
  console.log(chunk);
  writable.write(chunk);
});


