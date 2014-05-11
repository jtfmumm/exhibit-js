var connect = require('connect'),
    http = require('http'),
    app;

app = connect()
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/node_modules', connect.static('node_modules'));

http.createServer(app).listen(8080, function() {
  console.log('App running on http://localhost:8080');
});

test = connect()
  .use(connect.static('test'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/node_modules', connect.static('node_modules'));

http.createServer(test).listen(8000, function() {
  console.log('Jasmine tests running on http://localhost:8000');
});