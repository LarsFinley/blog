var React = require('react');

var links = ['home', 'blog'];

var NavBar = React.createClass({
	render: function(){
		var self = this;
		var link = links.map(function(item) {
			return (
				<li className="nav-item active"key={item}>
					<a className="nav-link" onClick={self.props.setActiveComponent.bind(null, item)}>{ item }</a>
				</li>
				)
		})
		return(
			<nav className="navbar navbar-light bg-faded">
			  <a className="navbar-brand" href="#">Lars Finley Martinson</a>
			  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
							<li><a data-scroll href="#who"><h3>Who I Am</h3></a></li>
							<li><a data-scroll href="#travels"><h3>Travels</h3></a></li>
							<li><a data-scroll href="#contact"><h3>Contact</h3></a></li>
							<li>
								<div className="dropdown dropMargin">
				  				<a data-scroll class="dropdown-toggle" data-toggle="dropdown"><h3>Blog</h3></a>
				  				<ul className="dropdown-menu">
								    <li><a href="/blog"><h3>Blog</h3></a></li>
										<li><a href="/login"><h3>Login</h3></a></li>
										<li><a href="/signup"><h3>Sign Up</h3></a></li>
								    <li><a href="/logout"><h3>Logout</h3></a></li>
							   	</ul>
								</div>
							</li>	
						</ul>
					</ul>
				</div>
			</nav>
		)
	}
});

module.exports = NavBar;
