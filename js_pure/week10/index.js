let http = require('http');
let HTMLParser = require('node-html-parser');
const Navbar = require('./components/navbar.js');

http.createServer(function (req, res) {
  let html = buildHtml(req);
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(html);
}).listen(3002);

function buildHtml(req) {
  let navbar = HTMLParser.parse(Navbar())
  console.log(navbar.toString())
//   let navbarElement = 
  // concatenate header string
  // concatenate body string
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <h1>header</h1>
    ${navbar.toString()}
    <h6>footer</h6>
    <script>console.log('cobaa')</script>
  </body>
  </html>`;
};