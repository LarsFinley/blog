var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/blog');


router.route('/post')
	.get(function(req, res) {
		Post.find(function(err, post) {
			if(err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(post)
			}
		});
	})
	.post(function(req, res){
		var u = req.user._id || "no userrrrr";
			var post = new Post({
				title: req.body.title,
				content: req.body.content,
				image: req.body.image,
				date: req.body.date,
				author: req.user._id,
			})
			post.save(function(err, post){
				if(err){
					res.status(500).send(err, 'Something broke!');
				} else {
					res.json(post);
				}
			})
	});

router.route('/post/:post_id')
	.get(function(req, res){
		Post.findById(req.params.post_id, function(err, post){
			if(err){
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(post);
			}
		})
});

module.exports = router;

