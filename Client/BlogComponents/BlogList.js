var React = require('react');
var BlogCard = require('./BlogCard');


function BlogList(props) {
		//map through data and pass it to blog card; 
		var blogList = props.blogArray.map(item => {
			return(
			    <BlogCard
			    getId = { props.getId }
			    id = { item._id }
					title = { item.title }
					content = { item.content } 
					author = { item.author }
					image = { item.image }
					date = { item.date }
					comment = { item.comment } />
				);
		})
		return (
			<div className="blog-flex">
				{ blogList }
			</div>	
			)
	}

BlogList.propTypes = {
	blogArray: React.PropTypes.array.isRequired
};

module.exports = BlogList;