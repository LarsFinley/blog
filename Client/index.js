var React = require('react');
var ReactDOM = require('react-dom');
var BlogApp = require('./blogApp.js');
var NavBar = require('./navbar.js');
var Notifier = require('./notifier');
var Home = require('./home');

require('./stylesheets/main.scss');

var App = React.createClass({
	getInitialState: function() {
		return {
			activeComponent: 'home'
		}
	},
	setActiveComponent: function(componentName) {
		console.log("FoundComp: ", componentName);
		this.setState({
			activeComponent: componentName
		})
	},
	showWhichComponent: function() {
		switch(this.state.activeComponent) {
	      case 'home':
	      return <Home />
	      	break;
    	
		    default:
		        return <Home />
		}
	},

  render: function() {
    return (
      <div>
      	<Notifier>
	      	<NavBar setActiveComponent={ this.setActiveComponent }/>
	      		<div>
	      			{ this.showWhichComponent() }
	      		</div>	
	       </Notifier>     
      </div>
      )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);