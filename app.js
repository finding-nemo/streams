'use strict';

const fs = require('fs');

//require in zlib to get access to createGzip method
const zlib = require('zlib');

//create a gzip object
let gzip = zlib.createGzip();

//create a stream to send the compressed gzip file
let compressed = fs.createWriteStream(__dirname + '/compressed.txt');

let readable = fs.createReadStream(__dirname + '/greet.txt', {'encoding': 'utf8'});

let writable = fs.createWriteStream(__dirname + '/greet2.txt');

readable.pipe(writable);

//pipe readable through gzip and then pipe it to compressed
readable.pipe(gzip).pipe(compressed);

