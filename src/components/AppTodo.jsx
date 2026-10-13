import { useState } from "react";
import { useEffect } from "react";
import ItemTodo from "./ItemTodo";
import { v4 as uuidv4 } from 'uuid';


export default function AppTodo() {

	let [text, setText] = useState("")
	const [todos, setTodos] = useState(() => {
		const saved = localStorage.getItem("todos");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function addTodo() {
		if (text.trim() === "") return;

		let newTodo = {
			id: uuidv4(),
			title: text,
			done: false
		}

		setTodos([...todos, newTodo])
		setText("")
	}

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		)
	}

	function deleteTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		<div className="w-full min-h-screen">
			<div className="flex justify-around mt-[25px] md:flex-col md:items-center">
				<input type="text" placeholder="امروز چیکارا میخوای بکنی؟"
					className="w-[280px] h-[50px] p-1 border-[3px] bg-yellow-50 border-purple-950 rounded-[10px] 
					shadow-[0_0_5px] shadow-purple-800/50 focus:outline-none text-right
					md:w-1/2 md:h-[7vh] md:p-2
					"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="bg-green-500 w-[70px] text-white rounded-[10px] font-bold
				 shadow-[0_0_5px] shadow-green-400/50
				md:mt-[30px] md:w-[130px] md:h-[60px]"
					onClick={addTodo}
				>
					<span className="md:hidden">✓</span>
					<span className="hidden md:inline">اضافه کن</span>
				</button>

			</div>
			<hr className="border-2 border-purple-800 shadow-[0_0_5px] shadow-purple-600/50 w-[70%] mt-[50px] ml-[15%]" />
			<ul className="p-3 flex flex-col items-center justify-center">
				{todos.map((todo) => (
					<ItemTodo key={todo.id} title={todo.title} done={todo.done}
						onToggle={() => toggleTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
					/>
				))}
			</ul>
		</div>
	)
}