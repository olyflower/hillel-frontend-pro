import { useRef } from "react";
import { Container, Form, Label, Input, Button } from "./Styles";

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
		<Container>
			<Form onSubmit={onSubmitHandler}>
				<Label>
					<Input type="text" ref={nameRef} placeholder="Enter name" />
					<Input
						type="text"
						ref={usernameRef}
						placeholder="Enter username"
					/>
					<Input
						type="text"
						ref={phoneRef}
						placeholder="Enter phone number"
					/>
				</Label>
				<Button type="submit">Save</Button>
				<Button type="button" onClick={onCancel}>
					Cancel
				</Button>
			</Form>
		</Container>
	);
}

export default CreateContact;
