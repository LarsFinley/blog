var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var flash = require('connect-flash');
var session = require('express-session');
var tweetRoutes = require('./routes/tweets');
var Post = require('./models/blog.js');
var postRoutes  = require('./routes/post');
var router = express.Router(); 
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
};


app.use(function(req, res, next) {
	var user = req.user || "no user";
	console.log(user);
	next();
});
app.use('/api/tweets', tweetRoutes);
app.use(express.static('public'));
app.use(session({secret: 'ilovescotchscotchyscotchscotch'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use('/public', express.static('public'));
app.use(flash());
	

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

var port = process.env.PORT || 8000;

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});


// THIS ONE IS BROKEN
// app.get('/post/:post_id', function(req, res){
// 	var user = req.user || "no user";
// 	Post.findById(req.params.post_id)
//     	.populate('comments')
//     	.exec(function(err, post){
//       		if(err){
//         		console.log(err)
//       		} else {
//         	res.render('showBlog', {post: post, user: user})
//       	}
//  });

// app.get('/blog', function(req, res){
//   var user = req.user || "no user";
//     Post.find(function(err, posts){
//       if(err){
//         console.log(err)
//       } else {
//         res.render('blog', {posts: posts, user: user})
//       }
//     })
// });

// app.get('/social', function(req, res){//homepage server file
// 	res.render('social',{user: "whats up"})
// });

// app.get('/new_post', function(req, res){
//   var user = req.user || "no user";
//   res.render('post', {user: user});
// });

app.use('/api', postRoutes);

app.listen(port, function(){
	console.log("app working on port: " + port)
});