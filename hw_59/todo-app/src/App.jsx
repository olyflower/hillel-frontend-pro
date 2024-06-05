import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import CreateToDo from "./components/CreateToDo";
import data from "./data";
import sortToDo from "./services/sort";

const initialData = data.map((item) => ({
	name: item.name,
	state: item.state,
}));

function App() {
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
		setToDo((tasks) => [...tasks, newTask]);
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
			<CreateToDo addTask={addTask} />
		</>
	);
}

export default App;
