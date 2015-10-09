var express = require('express');
var app = express();

var index = require('./routes/index');

app.set('port', (process.env.PORT || 3000));

app.use('/', index);

app.listen(app.get('port'), function(){
    console.log('listening on port ' + app.get('port'));
});

module.exports = app;