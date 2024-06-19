app.get('/', (req, res) => {
    const ip = req.ip || req.connection.remoteAddress;
  console.log(ip)
    res.send(`Your IP address is: ${ip}`);
});
