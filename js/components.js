var Nav = React.createClass({
	displayName: "Nav",

	render: function () {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default" },
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "navbar-header" },
					React.createElement(
						"h1",
						null,
						React.createElement(
							"a",
							{ href: this.props.linkUrl, className: "navbar-brand" },
							this.props.title
						)
					)
				)
			)
		);
	}
});

var Title = React.createClass({
	displayName: "Title",

	render: function () {
		var titleStyle = {
			color: "#777676",
			fontSize: "35px"
		};
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"h1",
				{ style: titleStyle },
				this.props.children
			)
		);
	}
});

var Button = React.createClass({
	displayName: "Button",

	getInitialState: function () {
		return {
			click: false
		};
	},
	toggleClick: function () {
		this.setState({
			click: !this.state.click
		});
	},
	render: function () {
		var btnClass = this.state.click ? "btn btn-warning" : "btn btn-success";
		var btnTitle = this.state.click ? this.props.txtActive : this.props.children;
		return React.createElement(
			"button",
			{ onClick: this.toggleClick, className: btnClass },
			" ",
			btnTitle,
			" "
		);
	}
});

var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		return { name: '', email: '', subject: 'r', message: '' };
	},
	handleNameChange: function (e) {
		this.setState({ name: e.target.value });
		// console.log(this.state.name);
	},
	handleEmailChange: function (e) {
		this.setState({ email: e.target.value });
		// console.log(this.state.email);
	},
	handleSubjectChange: function (e) {
		this.setState({ subject: e.target.value });
		// console.log(this.state.subject);
	},
	handleMessageChange: function (e) {
		this.setState({ message: e.target.value });
		// console.log(this.state.message);
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var email = this.state.email.trim();
		var subject = this.state.subject;
		var message = this.state.message.trim();
		if (!name || !email || !subject || !message) {
			return;
		}
		this.props.onContactSubmit({ id: this.props.idN, name: name, email: email, subject: subject, message: message });
	},
	render: function () {
		var inputStyle = {
			padding: "20px",
			fontSize: "16px",
			color: "#A7A5A5"
		};
		return React.createElement(
			"form",
			{ onSubmit: this.handleSubmit },
			React.createElement(
				"legend",
				null,
				"Search Name"
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "name" },
					"Name"
				),
				React.createElement("input", { type: "text", className: "form-control", onChange: this.handleNameChange, placeholder: "Insert name...", style: inputStyle })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "email" },
					"E-mail"
				),
				React.createElement("input", { type: "text", className: "form-control", onChange: this.handleEmailChange, placeholder: "Insert e-mail...", style: inputStyle })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "subject" },
					"Subject"
				),
				React.createElement(
					"select",
					{ id: "subject", className: "form-control", onChange: this.handleSubjectChange, defaultValue: this.state.subject },
					React.createElement(
						"option",
						{ value: "a" },
						"Angular JS"
					),
					React.createElement(
						"option",
						{ value: "j" },
						"Jquery"
					),
					React.createElement(
						"option",
						{ value: "r" },
						"React JS"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "message" },
					"Message"
				),
				React.createElement("textarea", { id: "message", className: "form-control", rows: "3", onChange: this.handleMessageChange, placeholder: "Insert a message" })
			),
			React.createElement(
				Button,
				{ txtActive: "Loading..." },
				"Send Message"
			)
		);
	}
});

var Contact = React.createClass({
	displayName: "Contact",

	render: function () {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"th",
				{ scope: "row" },
				this.props.idN
			),
			React.createElement(
				"td",
				null,
				this.props.name
			),
			React.createElement(
				"td",
				null,
				this.props.email
			),
			React.createElement(
				"td",
				null,
				this.props.subject
			),
			React.createElement(
				"td",
				null,
				this.props.children
			)
		);
	}
});

var List = React.createClass({
	displayName: "List",

	render: function () {
		var contactNodes = this.props.data.map(function (contact) {
			return React.createElement(
				Contact,
				{ key: contact.id, idN: contact.id, name: contact.name, email: contact.email, subject: contact.subject },
				contact.message
			);
		});
		return React.createElement(
			"table",
			{ className: "table table-hover" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Id"
					),
					React.createElement(
						"th",
						null,
						"Name"
					),
					React.createElement(
						"th",
						null,
						"E-mail"
					),
					React.createElement(
						"th",
						null,
						"Subject"
					),
					React.createElement(
						"th",
						null,
						"Message"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				contactNodes
			)
		);
	}
});