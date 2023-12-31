
const express = require('express');
const app = express();
const port = 3000;


app.get('/', function(req, res) {
    console.log('Request received on app01')
    res.send('Hello World!');
});

app.listen(port, async function() {
    console.log('Listening on port ' + port);
});