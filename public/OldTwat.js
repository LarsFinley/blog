var TwitterCard = React.createClass({
	getInitialState: function() {
		return {
		tweets: []
		}
	},

	loadTweetsFromServer: function() {
		console.log('initiating load tweets from server')
		var self = this;
		console.log('working');
		$.ajax({
			url: this.props.url,
			method: 'GET'
		}).done(function(data) {
			console.log(data);
			self.setState({tweets: data})	
		})
	},
	componentDidMount: function() {
		console.log("compDidMount")
		this.loadTweetsFromServer()
	},
	render: function() {
		var twitterCard = this.state.tweets.map(function(item) {
		return (
		<div className="panel panel-default col-sm-6">
				<div className="panel-body">
					<div>
						<img src="https://g.twimg.com/Twitter_logo_blue.png" className="thumbnailTweet" />
					</div>
					<div className="tweet-text">
						<div className="media col-sm-6">
							<p col-sm-6>{ item.text }</p>
						</div>
					</div>
				</div>	
			</div>
			)
	})
		return(
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="tweet-text">
						<p>{twitterCard}</p>
					</div>
				</div>	
			</div>
		);	
	}
});

React.render(<TwitterCard url="/api/tweets/rocket" />,
	document.getElementById('twitterCard'));