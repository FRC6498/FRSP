const http = require('http);

const port = 80
const ip = '0.0.0.0'
const server = http.createServer(function(req, res) { })
  .listen(port, ip, () => {
  console.log('App created on port ${port} at IP Address ${ip}');
  });
