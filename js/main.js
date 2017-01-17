
var Page = React.createClass({
	displayName: "Page",


	getInitialState: function () {
		return {
			data: [{
				id: "1",
				name: "Maria",
				email: "maria@mail.com",
				subject: "a",
				message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod quia ducimus!"
			}, {
				id: "2",
				name: "José",
				email: "jose@mail.com",
				subject: "r",
				message: "Praesentium illum nam hic eligendi dignissimos et corporis ut quos non nobis minus ratione, doloribus, qui amet excepturi?"
			}]
		};
	},
	handleContactSubmit: function (contact) {
		console.log(contact);
		var newContacts = this.state.data.concat([contact]);
		this.setState({ data: newContacts });
	},
	// componentDidMount: function() {
	//     $.ajax({
	//         url: 'https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=0&maxResults=40',
	//         dataType: 'json',
	//         cache: false,
	//         success: function(data) {
	//         	console.log(data);
	//             // this.setState({data: data});
	//             // this.chooseRandomQuote();
	//         }.bind(this),
	//             error: function(xhr, status, err) {
	//             console.error('https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=0&maxResults=40', status, err.toString());
	//         }.bind(this)
	//     });
	// },
	render: function () {

		return React.createElement(
			"myElement",
			null,
			React.createElement(Nav, { title: "React JS", linkUrl: "index.html" }),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					Title,
					null,
					"My children Title"
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idN: this.state.data.length + 1 })
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(List, { data: this.state.data })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById("page"));