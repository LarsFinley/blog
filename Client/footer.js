var React = require('react');

var links = ['welcome', 'cookies', 'fish', 'bears', 'beer'];

var Footer = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-fixed-bottom navbar-light bg-faded">
			  <a className="navbar-brand" href="#">Here is my Fixed bottom Navbar</a>
			</nav>
			)
	}
});

module.exports = Footer;