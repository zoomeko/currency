var express = require('express');
var routes = require('./routes/index');
var exp_hbs = require('express-handlebars');
var routes = require('./routes/index');
var about = require('./routes/about')
var app = express();
app.use('/', routes);
app.engine('.hbs', exp_hbs({
  extname:'.hbs',
  defaultlayout:'main'
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(_dirname, 'static')));
app.use('/', routes);
app.use('/about',about);
app.listen(process.env.PORT|| 3000, function(){
  console.log('Currency app running on port 3000');

});
module.export = app;
