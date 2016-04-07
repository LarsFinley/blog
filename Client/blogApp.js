
var React = require('react');
var BlogBox = require('./BlogComponents/BlogBox');
var BlogJumbotron = require('./BlogComponents/BlogJumbotron');

var BlogApp = React.createClass({
	
	render: function() {
		return(
			<div>
				<BlogJumbotron />
				<BlogBox />
			</div>
			)
	}
});

module.exports = BlogApp;