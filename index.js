var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('', (req, res) => {
    res.send('Hello Nodejs app')
});

app.listen(8080, async () => {
    console.log(`Server is running in port 8080`);
})