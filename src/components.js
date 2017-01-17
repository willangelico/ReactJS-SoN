var Nav = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<h1>
							<a href={ this.props.linkUrl } className="navbar-brand">{ this.props.title }</a>
						</h1>
					</div>
				</div>
			</nav>
		);
	}
});

var Title = React.createClass({
	render: function(){
		var titleStyle = {
			color: "#777676",
			fontSize: "35px"
		};
		return (
			<div className="row">
				<h1 style={titleStyle}>{ this.props.children }</h1>
			</div>
		);
	}
});

var Button = React.createClass({
	getInitialState: function(){
		return {
			click: false
		};
	},
	toggleClick: function(){
		this.setState({
			click: !this.state.click
		});
	},
	render: function(){
		var btnClass = this.state.click ? "btn btn-warning" : "btn btn-success";
		var btnTitle = this.state.click ? this.props.txtActive : this.props.children;
		return (
			<button onClick = { this.toggleClick } className = { btnClass }> { btnTitle } </button>
		);
	}
});

var Form = React.createClass({
	getInitialState: function(){
		return { name:'', email:'', subject: 'r', message: '' };
	},
	handleNameChange: function(e){
		this.setState({name: e.target.value});
		// console.log(this.state.name);
	},
	handleEmailChange: function(e){
		this.setState({email: e.target.value});
		// console.log(this.state.email);
	},
	handleSubjectChange: function(e){
		this.setState({subject: e.target.value});
		// console.log(this.state.subject);
	},
	handleMessageChange: function(e){
		this.setState({message: e.target.value});
		// console.log(this.state.message);
	},
	handleSubmit: function(e){
		e.preventDefault();
		var name = this.state.name.trim();
		var email = this.state.email.trim();
		var subject = this.state.subject;
		var message = this.state.message.trim();
		if(!name || !email || !subject || !message){
			return;
		}
		this.props.onContactSubmit({id: this.props.idN, name: name, email:email, subject:subject, message:message});
	},
	render: function(){
		var inputStyle = {
			padding: "20px",
			fontSize: "16px",
			color: "#A7A5A5"
		};
		return (
			<form onSubmit={this.handleSubmit}>
				<legend>Search Name</legend>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" className="form-control" onChange={this.handleNameChange} placeholder="Insert name..." style={inputStyle}  />
				</div>
				<div className="form-group">
					<label htmlFor="email">E-mail</label>
					<input type="text" className="form-control" onChange={this.handleEmailChange} placeholder="Insert e-mail..." style={inputStyle}  />
				</div>
				<div className="form-group">
					<label htmlFor="subject">Subject</label>
					<select id="subject" className="form-control" onChange={this.handleSubjectChange} defaultValue={this.state.subject}> 
						<option value="a">Angular JS</option>
						<option value="j">Jquery</option>
						<option value="r">React JS</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea id="message" className="form-control" rows="3" onChange={this.handleMessageChange} placeholder="Insert a message"></textarea>
				</div>
				<Button txtActive = "Loading...">Send Message</Button>
			</form>
		);
	}
});

var Contact = React.createClass({
	render: function(){
		return(
			<tr>
				<th scope="row">{this.props.idN}</th>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.subject}</td>
				<td>{this.props.children}</td>
			</tr>
		);
	}
});

var List = React.createClass({
	render: function(){
		var contactNodes = this.props.data.map(function(contact){
			return(
				<Contact key={contact.id} idN={contact.id} name={contact.name} email={contact.email} subject={contact.subject}>
					{contact.message}
				</Contact>
			);
		});
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>E-mail</th>
						<th>Subject</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{contactNodes}
				</tbody>
			</table>
		);
	}
});