import styles from "../components/ToDoItem.module.css";

const ToDoItem = ({ toDo, toDoHandler, deleteTask }) => {
	return (
		<div className={styles.containerToDo}>
			<h1>To Do List</h1>
			{toDo.map((item, index) => (
				<div
					className={styles.item}
					key={index}
					onClick={() => toDoHandler(item.name)}
				>
					{item.name} - {item.state}{" "}
					<button onClick={() => deleteTask(item.name)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ToDoItem;
