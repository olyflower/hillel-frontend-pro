import { useRef } from "react";
import styles from "../components/CreateToDo.module.css";

const CreateToDo = ({ addTask }) => {
	const taskRef = useRef();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const taskName = taskRef.current.value;

		if (taskName) {
			addTask(taskName);
			taskRef.current.value = "";
		}
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.containerForm}>
			<label className={styles.label}>
				<input
					className={styles.input}
					type="text"
					ref = {taskRef}
					placeholder="Enter new task"
				/>
			</label>

			<button className={styles.button} type="submit">
				Add new task
			</button>
		</form>
	);
};

export default CreateToDo;
