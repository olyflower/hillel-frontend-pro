import styles from "../components/ToDoItem.module.css";

const ToDoItem = ({ item, onToggle, deleteTask }) => {
	return (
		<div className={styles.item} onClick={() => onToggle(item.name)}>
			{item.name} - {item.state}{" "}
			<button
				onClick={(e) => {
					e.stopPropagation();
					deleteTask(item.name);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default ToDoItem;
