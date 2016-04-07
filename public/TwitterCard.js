var TwitterCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-body">					
						<img src="https://g.twimg.com/Twitter_logo_blue.png" className="thumbnailTweet" /><img src={this.props.profile_image_url}/>
						<p> {this.props.text} </p>
					</div>
					<div className="panel-footer">
						<p> {this.props.username}</p>
						<p> {this.props.created_at}</p>
					</div>	
				</div>
			</div>
			)
	}
});