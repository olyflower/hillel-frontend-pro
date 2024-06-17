import {
	Container,
	Title,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Button,
} from "./Styles";

function ContactList({ contacts, deleteContact, addContact }) {
	return (
		<Container>
			<Title>Contacts</Title>
			<Table>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Username</Th>
						<Th>Phone</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{contacts.map((item, index) => (
						<Tr key={index}>
							<Td>{item.name}</Td>
							<Td>{item.username}</Td>
							<Td>{item.phone}</Td>
							<Td>
								<Button
									onClick={() => {
										deleteContact(item.id);
									}}
								>
									Delete
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<Button onClick={addContact}>Add contact</Button>
		</Container>
	);
}

export default ContactList;
