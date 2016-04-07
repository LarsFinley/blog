var React = require('react');
var BlogList = require('./BlogList');
var Loader = require('../Loader');

var BlogListData = React.createClass({

	getInitialState: function() {
		return {
			allBlogs: null
		}
	},
	loadAllBlogsFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/blog',
			method: 'GET',
		}).done(data => this.setState({allBlogs: data}));
	},
	componentDidMount: function() {
		this.loadAllBlogsFromServer();
	},
	render: function() {
		return this.state.allBlog ? <BlogList blogArray={this.state.allBlog} getId={ this.props.getId } /> : <Loader/>
	}
});

module.exports = BlogListData;

