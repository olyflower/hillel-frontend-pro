import ToDoItem from "../components/ToDoItem";
import styles from "../components/ToDoItem.module.css";

const ToDoList = ({ toDo, onToggle, deleteTask }) => {
	return (
		<div className={styles.containerToDo}>
			<h1>To Do List</h1>
			{toDo.map((item, index) => (
				<ToDoItem
					key={index}
					item={item}
					onToggle={onToggle}
					deleteTask={deleteTask}
				/>
			))}
		</div>
	);
};

export default ToDoList;
