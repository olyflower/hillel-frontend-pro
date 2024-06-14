function sortToDo(a, b) {
	if (a.state < b.state) {
		return -1;
	} else if (a.state > b.state) {
		return 1;
	}
	return 0;
}

export default sortToDo;
