var express = require('express')
  , app     = express.createServer();

app.configure(function(){
  this
   .set('views', __dirname)
   .set('view engine', 'jade')
});

app.get('*', function(res, res, next){
  var colors = [];
  for(i=0;i<=255;i++){
    colors.push("[48;5;"+i+"m "+i+" ");
    if(i==255) colors.push("[49m  [49m")
  }
  res.render('pallete', {colors: colors});
})

var port = process.env.PORT || 3001;

app.listen(port)
