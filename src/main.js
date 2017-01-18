
var Page = React.createClass({

	getInitialState: function(){
		return{
			data: [
				{
					id: "1",
					name: "Maria",
					email: "maria@mail.com",
					subject: "a",
					message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod quia ducimus!"
				},
				{
					id: "2",
					name: "José",
					email: "jose@mail.com",
					subject: "r",
					message: "Praesentium illum nam hic eligendi dignissimos et corporis ut quos non nobis minus ratione, doloribus, qui amet excepturi?"
				}
			]
		};
	},
	handleContactSubmit:function(contact){
		console.log(contact);
		var newContacts = this.state.data.concat([contact]);
		this.setState({data:newContacts}); 
	},
	render: function(){
		return(
			<myElement>
				<Nav title="React JS" linkUrl="index.html" />			
				<div className="container">
					<Title>
						My children Title
					</Title>
					<div className="row">
						<Form onContactSubmit={this.handleContactSubmit} idN={this.state.data.length + 1} />
					</div>
					<div className="row">
						<List data={this.state.data} />
					</div>
				</div>
			</myElement>
		);
	}
});

ReactDOM.render(
	<Page />,
	document.getElementById("page")
);
