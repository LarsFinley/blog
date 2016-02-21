var express = require('express');
var router = express.Router();//is a method on express
var Bear = require('../models/bears');//requires our Schema for bears.js

router.route('/bears')//.post()=>basically the same except now were chaining/express terminology
.post(function(req, res){//making a post function/.post=http function

		var bear = new Bear();//create a new bear/schema
		
		bear.name = req.body.name;//sets the name/pulling it from our request
		bear.age = req.body.age;//sets the age/info is in the body
		bear.gender = req.body.gender;//sets the gender/pulling it from our request

		bear.save(function(err, bear){//.save is a mongoose function,going to pump out our new bear or 
			if(err){//error if it cant
				console.log(err);
			} else {
				res.json(bear);//returning the bear into bear.js in json format
			}//bears=data and api allows us to get data
		})
	})

.get(function(req, res){//.find is a mongoose method
	Bear.find(function(err, bears){//looking at the entire database and returning the json objects
		if(err){
			console.log(err);
		} else {
			res.json(bears)
		}
	})
});

router.route('/bears/:bear_id')//finding a single bear by its specific id, the : tells us its a param
.get(function(req, res){
	Bear.findById(req.params.bear_id, function(err, bear){//request this bear id in the parameter in the request from the url
		if(err){//findbyid is a function w/ 2 params-1-req. p.bearid, and 2-function-error or bear
			console.log(err)
		} else {
			res.json(bear);//give me back the whole bearSchema
		}
	})
})

.put(function(req, res){
	Bear.findById(req.params.bear_id, function(err, bear){
		if(err){
			console.log(err)
		} else {
			
			bear.name = req.body.name ? req.body.name : bear.name;//ternary conditional
			bear.age = req.body.age ? req.body.age : bear.age;//ternary conditional
			bear.gender = req.body.gender ? req.body.gender : bear.gender;//ternary conditional
			//bear.name = req.body.name || bear.name; is the same thing, shorter syntax
			bear.save(function(err){
				if (err){
					console.log(err)
				} else {
					res.json({title: 'bear updated'});
				}
			})
		}
	})
})

.delete(function(req, res){
	Bear.remove({_id: req.params.bear_id}, function(err, bear){
		if (err){
			console.log(err)
		} else {
			res.json({title:"bear deleted successfully"})
		}
	})
});

module.exports = router;
