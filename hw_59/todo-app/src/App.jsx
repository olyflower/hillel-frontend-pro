import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";
import data from "./data";
import sortToDo from "./services/sort";

function App() {
	const initialData = data.map((item) => ({
		name: item.name,
		state: item.state,
	}));

	const [toDo, setToDo] = useState(initialData);

	const toDoHandler = (name) => {
		setToDo((prevToDo) =>
			prevToDo.map((item) =>
				item.name === name
					? {
							...item,
							state: item.state === "done" ? "in work" : "done",
					  }
					: item
			)
		);
	};

	const addTask = (name) => {
		const newTask = { name, state: "in work" };
		setToDo([...toDo, newTask]);
	};

	const sortedToDo = [...toDo].sort(sortToDo);

	const deleteTask = (name) => {
		setToDo(toDo.filter((item) => name !== item.name));
	};

	return (
		<>
			<ToDoItem
				toDo={sortedToDo}
				toDoHandler={toDoHandler}
				deleteTask={deleteTask}
			/>
			<Form addTask={addTask} />
		</>
	);
}

export default App;
