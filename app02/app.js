
const express = require('express');
const app = express();
const port = 3002;


app.get('/', function(req, res) {
    console.log('Request received on app02')
    res.send('Hello World!');
});

app.listen(port, async function() {
    console.log('Listening on port ' + port);
});