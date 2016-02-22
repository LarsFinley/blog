Router.route('/blog')
.post(function(req, res){

		var blog = new Blog();
		
		blog.name = req.body.name;
		blog.comment = req.body.comment;
		
		blog.save(function(err, blog){
			if(err){
				console.log(err);
			} else {
				res.json(blog);
			}
		})
	})

.get(function(req, res){
	Blog.find(function(err, blog){
		if(err){
			console.log(err);
		} else {
			res.json(blog)
		}
	})
});

Router.route('/blog/:blog_id')
.get(function(req, res){
	Blog.findById(req.params.blog_id, function(err, blog){
		if(err){
			console.log(err)
		} else {
			res.json(blog);
		}
	})
})

.put(function(req, res){
	Blog.findById(req.params.blog_id, function(err, blog){
		if(err){
			console.log(err)
		} else {
			
			blog.name = req.body.name || blog.name;
			blog.comment = req.body.comment || blog.comment;
			blog.save(function(err){
				if (err){
					console.log(err)
				} else {
					res.json({title: 'blog updated'});
				}
			})
		}
	})
})
// can I do an edit function?
// .delete(function(req, res){
// 	Blog.remove({_id: req.params.blog_id}, function(err, blog){
// 		if (err){
// 			console.log(err)
// 		} else {
// 			res.json({title:"bear deleted successfully"})
// 		}
// 	})
// });

