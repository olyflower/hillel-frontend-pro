import { useCallback, useEffect, useState } from "react";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";

import "./App.css";

function App() {
	const [contacts, setContacts] = useState([]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const contacts = await (
			await fetch("https://jsonplaceholder.typicode.com/users")
		).json();
		setContacts(contacts);
	};

	const deleteContact = useCallback((id) => {
		setContacts((prevContacts) =>
			prevContacts.filter((item) => id !== item.id)
		);
	}, []);

	const addContact = useCallback(() => {
		setVisible(true);
	}, []);

	const handlerSave = useCallback((newContact) => {
		setContacts((prevContacts) => [...prevContacts, newContact]);
		setVisible(false);
	}, []);

	const handlerCancel = useCallback(() => {
		setVisible(false);
	}, []);

	return (
		<div>
			<ContactList
				contacts={contacts}
				deleteContact={deleteContact}
				addContact={addContact}
			/>
			{visible && (
				<CreateContact
					addContact={handlerSave}
					onCancel={handlerCancel}
				/>
			)}
		</div>
	);
}

export default App;
