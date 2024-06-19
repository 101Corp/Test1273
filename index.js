const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.connection.remoteAddress;
    res.send(`Your IP address is: ${ip}`);
    console.log(ip)
});

app.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080/');
});
