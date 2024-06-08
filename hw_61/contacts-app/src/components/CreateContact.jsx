import { useRef } from "react";
import styles from "../components/CreateContact.module.css";

function CreateContact({ addContact, onCancel }) {
	const nameRef = useRef();
	const usernameRef = useRef();
	const phoneRef = useRef();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const name = nameRef.current.value;
		const username = usernameRef.current.value;
		const phone = phoneRef.current.value;

		if (name && username && phone) {
			const newContact = { name, username, phone };
			addContact(newContact);
			nameRef.current.value = "";
			usernameRef.current.value = "";
			phoneRef.current.value = "";
		}
	};
	return (
		<div className={styles.container}>
			<form onSubmit={onSubmitHandler}>
				<label>
					<input type="text" ref={nameRef} placeholder="Enter name" />
					<input
						type="text"
						ref={usernameRef}
						placeholder="Enter username"
					/>
					<input
						type="text"
						ref={phoneRef}
						placeholder="Enter phone number"
					/>
				</label>
				<button type="submit" className={styles.button}>
					Save
				</button>
				<button
					type="button"
					onClick={onCancel}
					className={styles.button}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default CreateContact;
