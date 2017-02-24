var express = require('express');
var router = express.Router();
var exchangeRates = {'EURO' : 0.94,'JPY' :112.86};
Router.get('/',function(req,res){
  res.render('index');

});
router.get('/convert', function(req, res){
  var dollar = req.query.dollar_amount;
  var convertTo = req.query.to_currency;
  res.send('To do: conver $' + dollar +' to ' + convertTo);
var rate = exchangeRates[convertTo];
result = dollar*rate;
res.send('results',{+ dollars :dollars,result:result,currency:currency })
});
module.exports = Router;
