import { useState } from "react";
import styles from "../components/Form.module.css";

const Form = ({ addTask }) => {
	const [taskName, setTaskName] = useState("");

	const onChangeHandler = (event) => {
		setTaskName(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (taskName) {
			addTask(taskName);
			setTaskName("");
		}
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.containerForm}>
			<label className={styles.label}>
				<input
					className={styles.input}
					type="text"
					value={taskName}
					placeholder="Enter new task"
					onChange={onChangeHandler}
				/>
			</label>

			<button className={styles.button} type="submit">
				Add new task
			</button>
		</form>
	);
};

export default Form;
