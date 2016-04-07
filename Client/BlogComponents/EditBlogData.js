var React = require('react');
var EditFishForm = require('./EditFishForm');


var EditBlogData = React.createClass({
	getInitialState: function(){
		return{
			title: null,
			content: null,
			author: null,
			image: null,
			date: null,
			comments: null,
		}
	},
	loadOneFishFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/blog/oneBlog/' + this.props.id,
			method: 'GET',
		}).done(function(data) {
			console.log("loaded one blog from server", data);
			self.setState({ 
				title: data.title,
				content: data.content,
				author: data.author,
				date: data.date,
				img: data.img,
				comments: data.comments,
			})
		})
	},
	contextTypes: {
			sendNotification: React.PropTypes.func.isRequired
	},
	onTitleChange: function(e) {
		this.setState({ title: e.target.value })
	},
	onContentChange: function(e) {
		this.setState({ content: e.target.value })
	},
	onAuthorChange: function(e) {
		this.setState({ Author: e.target.value })
	},
	onImgChange: function(e) {
		this.setState({ img: e.target.value })
	},
	onDateChange: function(e) {
		this.setState({ date: e.target.value })
	},
	onCommentsChange: function(e) {
		this.setState({ comments: e.target.value })
	},
	componentDidMount: function() {
		this.loadOneBlogFromServer()
	},
	submitBlogToServer: function(e) {
			e.preventDefault();
			
			var data = {
				title: this.state.title,
				content: this.state.content,
				author: this.state.author,
				date: this.state.date,
				img: this.state.img,
				comments: this.state.comments,
			};
			console.log("loaded aaaaaaaa", data);

			var self = this;
			$.ajax({
				url: '/api/blog/oneBlog/' + this.props.id,
				method: 'PUT',
				data: data,
			}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('blog');//we want it to redirect to the fish page
				self.context.sendNotification("Hey you edited a blog post!!!!!");
			});
		},
	render: function(){
		return (<EditBlogForm
							onTitleChange={this.onTitleChange}
							onLengthChange={this.onLengthChange}
							onImgChange={this.onImgChange}
							onContentChange={this.onContentChange}
							onDateChange={this.onDateChange}
							onCommentsChange={this.onCommentsChange}
							submitBlogToServer={this.submitBlogToServer}
								{...this.state} /> 
							)
							}
					
	});

module.exports = EditBlogData;