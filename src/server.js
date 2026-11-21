// server.js (exemple)
const express = require('express');
const path = require('path');
const app = express();


app.use( express.static( __dirname + '/src' ));

app.get('*', (req, res, next) => {
    if (req.path.endsWith ('.jsx')) {
      res.type('application/javascript');
    }
    next();
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));