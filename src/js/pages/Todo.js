import React from "react";
import Todos from "../components/todo/Todos";

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					id: 112233,
					text: "Shop Nastea",
					complete: false
				},
				{
					id: 223344,
					text: "Skillz to pay billz",
					complete: false
				}
			],
		};
	}

	render() {
		const { todos } = this.state;
		const TodoComponents = todos.map((todo) => {
			return <Todos key={todo.id} {...todo}/>
		});

		return (
			<div>
				<h1> Todos </h1>
				<ul> {TodoComponents} </ul>
			</div>
		);
	}
}