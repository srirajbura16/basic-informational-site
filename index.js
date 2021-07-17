const http = require('http');
const url = require('url');

const fs = require('fs');

const page404 = fs.readFileSync('./404.html', (err, data) => {
  if (err) throw err;
  return data;
});

http
  .createServer(function (request, response) {
    const q = url.parse(request.url, true);
    let homePage = './index.html';
    const page = `.${q.pathname}`;

    let fileName = page == './' ? homePage : page;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.writeHead(404, { 'content-Type': 'text/html' });
        response.write(page404);
        response.end();
      } else {
        response.writeHead(200, { 'content-Type': 'text/html' });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(8080);
