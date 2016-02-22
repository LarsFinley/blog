Express = require('express');
Mongoose = require('mongoose');
Blog = require('./models/blog.js')
ExpressApp = Express();
Router = Express.Router(); 

var bodyParser = require('body-parser');
ExpressApp.use(bodyParser.urlencoded({ extended: true }));
ExpressApp.use(bodyParser.json());
ExpressApp.use(Express.static('public'));
ExpressApp.set('view engine', 'ejs');
ExpressApp.use('/api', Router);
ExpressApp.listen(process.env.PORT || 8000);
	
console.log('Magical things happens on port ' + (process.env.PORT || 8000));

Mongoose.connect('mongodb://localhost/blog');

ExpressApp.get('/', function(req, res){//homepage server file
	res.render('index',{title:"hello world"})
});

ExpressApp.get('/blog', function(req, res){
	Blog.find(function(err, blog){
		if(err){
			console.log(err);
		} else {
			res.render('blog', {blog:blog})		
		}
	})
	
});

require('./routes/blog');