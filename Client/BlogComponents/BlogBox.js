var React = require('react');

var BlogListData = require('./BlogListData');
var BlogFormData = require('./BlogFormData');

var Toggler = React.createClass({
	render: function() {
		return(
			<div className="container">
			  <div className="btn-group" data-toggle="buttons">
			    <button onClick={this.props.toggleActiveComp.bind(null, 'blog')}> Blog Display </button>
			    <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Create New Blog Post </button>
			  </div>
			</div>
			)
	}
});

var BlogBox = React.createClass({
	getInitialState: function() {
		return {
			activeComponent: 'blog',
			activeBlogId: null,
			}
	},
	getId: function(id) {
		return this.setState({ activeBlogId: id, activeComponent: 'oneBlog' })
	},
	showComp: function() {
		/*this function returns one function based on activeComp state*/
		if(this.state.activeComponent === 'blog'){
			return <BlogListData getId={ this.getId } />
		} else if (this.state.activeComponent === 'form') {
				return <BlogFormData toggleActiveComp={ this.toggleActiveComp }/>
		} else {
			throw new Error("Invalid active component", this.state.activeComponent)
		}
	},
		toggleActiveComp: function(name){
			this.setState({ activeComponent: name })
		},
		render: function() {
			return (
				<div>
					<Toggler toggleActiveComp={this.toggleActiveComp}/>
					{ this.showComp() }
				</div>	
			)
	}
});

module.exports = BlogBox;