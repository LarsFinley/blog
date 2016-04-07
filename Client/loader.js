var React = require('react');

var Loader = React.createClass({
	render: function() {
		return(
		<div>
	    	<i className="fa-spin fa fa-cogs fa-6 myFont"></i>
	    </div>
	    )
	}
});

module.exports = Loader;