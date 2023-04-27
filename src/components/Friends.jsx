import { NavLink } from "react-router-dom";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
				<td>
					<NavLink to={"/profile/" + props.id} >{props.lastname} {props.name}</NavLink>
				</td>
		</tr>
	);
};

export const Friends = (props) => {
	let users = props.function();
	console.log(users);
	let userRow = [];
	let usersCount = Object.keys(users).length;
	for (let i = 0; i < usersCount; i++) {
		userRow.push(<TableRow id={users[i].id} index={i} key={i} name={users[i].name} lastname={users[i].lastname} />);
	}
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
					<tbody>{userRow}</tbody>
				</table>
			</div>
		</div>
	);
};