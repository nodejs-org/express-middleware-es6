import express from 'express';
import middleware1 from './middleware1';
import middleware2 from './middleware2';
import asyncMiddleware3 from './middleware3';
import promiseMiddleware from './middlewarePromise';

let app = express();
let path = require('path');

app.use(promiseMiddleware);

app.use(asyncMiddleware3);

app.use(middleware1);

let mw2 = new middleware2({'secKey':'AES256'});
app.use(mw2.oauth.bind(mw2));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

let server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
})
