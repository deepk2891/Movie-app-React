export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	// const handleDelete = () => {
	// 	if (completed) {
	// 		deleteTodo(id)
	// 	}
	// }
	// 🟨By Doinng this item will delete if checkbox checked

	return (
		<li>
			<label>
				<input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
				{title}
			</label>
			{/* <button onClick={handleDelete} className="btn btn-danger"> */}
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				{" "}
				Delete
			</button>
		</li>
	)
}
