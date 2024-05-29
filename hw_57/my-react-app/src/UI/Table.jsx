const Table = ({ children, thead, ...props }) => {
	return (
		<>
			{Array.isArray(children) && children.length > 0 ? (
				<table {...props}>
					<thead>
						<tr>{thead}</tr>
					</thead>
					<tbody>{children}</tbody>
				</table>
			) : (
				<div className="empty-table"> No data matching</div>
			)}
		</>
	);
};

export default Table;
