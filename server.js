const express = require('express');

const app = express();
app.listen( 8000, () => {
    console.log('Now listening at http://localhost:8000 ...');
});

app.get( '/', ( req, res ) => {
    console.log('Someone requested /');
    res.send('<h1>Hello World from Express!</h1>');
}); // GET /

app.get( '/guestbook', ( req, res ) => {
    res.send(
        `<h2>Sign my guestbook!!</h2>
        <img src="http://www.fillmurray.com/300/200"/>`
    );
})