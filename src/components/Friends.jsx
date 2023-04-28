import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.id + 1}</th>
				<td>
					<NavLink to={"/profile/" + props.id} >{props.lastname} {props.name}</NavLink>
				</td>
		</tr>
	);
};

export class Friends extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userRow: [] };
	}

	componentDidMount() {
		this.props.function().then((users) => {
			console.log(users);
			let userRow = [];
			let usersCount = users.length;
			for (let i = 0; i < usersCount; i++) {
				userRow.push(<TableRow id={users[i].id} key={i} name={users[i].name} lastname={users[i].lastname} />);
			}
			this.setState({userRow: userRow});
		});
	} 	

render() {
	return (
		<div className="row">
			<div className="col-8">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">№</th>
							<th scope="col">Фамилия Имя</th>
						</tr>
					</thead>
					<tbody>{this.state.userRow}</tbody>
				</table>
			</div>
		</div>
	);
}
}

		
