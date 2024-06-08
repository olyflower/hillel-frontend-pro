import styles from "../components/ContactList.module.css";

function ContactList({ contacts, deleteContact, addContact }) {
	return (
		<div className={styles.container}>
			<h1>Contacts</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Phone</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((item, index) => (
						<tr key={index}>
							<td>{item.name}</td>
							<td>{item.username}</td>
							<td>{item.phone}</td>
							<td>
								<button
									onClick={() => {
										deleteContact(item.id);
									}}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button onClick={addContact}>Add contact</button>
		</div>
	);
}

export default ContactList;
