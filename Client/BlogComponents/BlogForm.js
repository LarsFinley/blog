var React = require('react');

function BlogForm(props) { 	//Pure rendering method, only needs to render, STATELESS FUNCTION!!!!
		return (
			<div className="jumbotron newBlog">
				<form onSubmit={ props.submitBlogToServer }>
					<h3> Enter A New Blog Post </h3>
				  <fieldset className="form-group">
				    <label>Title</label>
				    <input onChange={ props.onTitleChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Content</label>
				    <input onChange={ props.onContentChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Image URL</label>
				    <input onChange={ props.onUrlChange } type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Author</label>
				    <input onChange={ props.onAuthorChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label>Date</label>
				    <input onChange={ props.onDateChange }  type="text" className="form-control" />
				  </fieldset>
				  <div className="container">
				    <div className="row">
				      <div className='col-sm-6'>
		            <div className="form-group">
	                <div className='input-group date' id='datetimepicker1'>
                    <input type='text' className="form-control" />
	                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
		                    </span>
	                </div>
		            </div>
			        </div>
				    </div>
					</div>
				  <button type="submit" className="btn btn-success">Submit</button>
				</form>
			</div>
			)
};

module.exports = BlogForm;