const express = require('express');

const hostname = express();
const port = 3000;

hostname.get('/page',(req, res) => {
    var a = 1; 
    var b = 2;
    var c = a+b;
  return res.send(`hello world, c = ${c}`);
});

hostname.listen(port, hostname, () => {
  console.log(`Server running at http://${port}/`);
});