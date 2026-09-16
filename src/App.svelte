<script>
	import { flip } from "svelte/animate";
	import { SvelteSet } from "svelte/reactivity";
	import Header from "./components/Header.svelte";
	import Todo from "./components/Todo.svelte";
	import * as localDB from "./methods/localstorage.js";

	const todos = new SvelteSet(localDB.getTodos());
	let newTodo = $state.raw("");

	let inputInvalid = $derived.by(() =>
		todos.has(newTodo.trim()) ? true : null,
	);

	function deleteTodo(title) {
		todos.delete(title);
		localDB.setTodos([...todos]);
	}

	function addTodo() {
		if (inputInvalid || !newTodo.trim()) {
			return;
		}
		todos.add(newTodo.trim());
		localDB.setTodos([...todos]);
		newTodo = "";
	}

	function pressEnter({ key }) {
		if (key === "Enter") addTodo();
	}
</script>

<Header></Header>

<main class="container">
	<div role="group">
		<input
			onkeypress={pressEnter}
			type="text"
			bind:value={newTodo}
			aria-invalid={inputInvalid}
		/>
		<button onclick={addTodo}>Add</button>
	</div>
	<hr />
	{#each todos as todo (todo)}
		<div animate:flip={{ duration: 300 }}>
			<Todo title={todo} {deleteTodo}></Todo>
		</div>
	{/each}
</main>
