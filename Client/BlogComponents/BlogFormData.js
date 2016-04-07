var React = require('react');
var BlogForm = require('./BlogForm');

var BlogFormData = React.createClass({
	getInitialState: function() {
			return{
				blogTitle: null,
				blogContent: null,
				blogAuthor: null,
				blogImg: null,
				blogDate: null,
			}
		},
		contextTypes: {
			sendNotification: React.PropTypes.func.isRequired
		},
		onTitleChange: function(e) {
			this.setState({ blogTitle: e.target.value })
		},
		onContentChange: function(e) {
			this.setState({ blogContent: e.target.value })
		},
		onAuthorChange: function(e) {
			this.setState({ blogAuthor: e.target.value })
		},
		onImageChange: function(e) {
			this.setState({ blogImage: e.target.value })
		},
		onDateChange: function(e) {
			this.setState({ blogDate: e.target.value })
		},
		submitBlogToServer: function(e) {
			e.preventDefault();
			
			var data= {
				title: this.state.blogTitle.trim(),
				content: this.state.blogContent.trim(),
				author: this.state.blogAuthor.trim(),
				image: this.state.blogImage.trim(),
				date: this.state.blogDate.trim(),
			};

			var self = this;
			$.ajax({
				url: '/api/blog',
				method: 'POST',
				data: data,
			}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('blog');//we want it to redirect to the fish page
				self.context.sendNotification("Hey you added a blog post!");
			});

			this.setState({blogTitle: '', blogContent: '', blogAuthor: '', blogImage: '', blogDate: ','});
		},
		render: function() {
			return (
				<FishForm
					submitBlogToServer={ this.submitBlogToServer }
					onTitleChange= { this.onTitleChange }
					onContentChange= { this.onContentChange }
					onDateChange= { this.onDateChange }
					onImageChange= { this.onImageChange } 
					onAuthorChange= { this.onAuthorChange }/>
		)
	}
});

module.exports = BlogFormData;