var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

var port = process.env.PORT || (8000);        

var router = express.Router();              

app.listen(port);
console.log('Magical things happens on port ' + port);