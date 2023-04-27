import styles from "./Profile.module.css";

export const Profile = (props) => {
	let userId = location.pathname.split("/")[2];
	let user = props.function(userId);

	console.log(userId);
	return (
		<div className="row">
			<div className="col-sm-4">
				<img
					src={user.avatar}
					alt="" width="100%"
				/>
			</div>
			<div className="col-sm-8">
				<h2 className={styles.header}>{user.name} {user.lastname}</h2>
				<h3 className={styles.about}>Какая-то история</h3>
				<h4 style={{ fontWeight: "700" }}>Id: {user.id}</h4>
				<p className={styles.paragraph}>
					{user.about}
				</p>
			</div>
		</div>
	);
};