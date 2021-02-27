var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var chartData = [];
  for (var i = 0; i < 5; i++){
    chartData.push(Math.random() * 50);
  }
  let data1=JSON.stringify(chartData)
  res.render('index', {chartData:data1});
});



module.exports = router;
