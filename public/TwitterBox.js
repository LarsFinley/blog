var TwitterBox = React.createClass({
	PropTypes: {
		tweetsArray: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},


	render: function() {
		var tweets = this.props.tweetsArray.map(function(t) {
			return <TwitterCard username={t.username}
								text={t.text}
								created_at={t.created_at}
								profile_image_url={t.profile_image_url}
			/>
		});

		return (

			<div class="jumbotron">
				<div className="TwitterBox col-md-6">
					<h4> TwitterBox </h4>
					{tweets}
				</div>
			</div>	
			);
	}
});