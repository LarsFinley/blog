Express = require('express');
Mongoose = require('mongoose');
Blog = require('./models/blog.js')
ExpressApp = Express();
Router = Express.Router(); 
Passport = require('passport');
var session = require('express-session');
Flash = require('connect-flash');

var bodyParser = require('body-parser');
ExpressApp.use(bodyParser.urlencoded({ extended: true }));
ExpressApp.use(bodyParser.json());
ExpressApp.use(Express.static('public'));
ExpressApp.use(session({secret: 'ilovescotchscotchyscotchscotch'
}));
ExpressApp.use(Passport.initialize());
ExpressApp.use(Passport.session());
ExpressApp.use(session({
 cookie: {
   maxAge: 60000
 }
}));
ExpressApp.use(Flash());

ExpressApp.use(function(req, res, next) {
	var user = req.user || "no user";
	console.log(user);
	next();
});
ExpressApp.set('view engine', 'ejs');
ExpressApp.use('/api', Router);
ExpressApp.listen(process.env.PORT || 8000);
	
console.log('Magical things happens on port ' + (process.env.PORT || 8000));

Mongoose.connect('mongodb://localhost/blog');

ExpressApp.get('/', function(req, res){//homepage server file
	var user = req.user || "no user"
	res.render('index',{user: user})
});

ExpressApp.get('/blog', function(req, res){
	Blog.find(function(err, blog){
		if(err){
			console.log(err);
		} else {
			res.render('blog', {blog:blog, user: 'user'})		
		}
	})
	
});



require('./config/Passport')(Passport);
// routes ======================================================================
require('./routes/user.js')(ExpressApp, Passport);

require('./routes/blog');