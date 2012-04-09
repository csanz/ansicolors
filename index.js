var express = require('express')
  , app     = express.createServer();

app.configure(function(){
  this
   .set('views', __dirname)
   .set('view engine', 'jade')
   .use(express.static(__dirname + '/../public'))
});

app.get('*', function(res, res, next){
  var colors = []
    , i = 1;
  for(i=1;i<=255;i++){
    colors.push("[48;5;"+i+"m "+i+" ");
  }
  res.render('pallete', {colors: colors});
})

var port = process.env.PORT || 3001;

app.listen(port)