import { useEffect, useState } from "react";
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

	const deleteContact = (id) => {
		setContacts(contacts.filter((item) => id !== item.id));
	};

	const addContact = () => {
		setVisible(true);
	};

	const handlerSave = (newContact) => {
		setContacts([...contacts, newContact]);
		setVisible(false);
	};

	const handlerCancel = () => {
		setVisible(false);
	};

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
