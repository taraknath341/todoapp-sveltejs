<script>
	import { SvelteSet } from "svelte/reactivity";
	import Header from "./components/Header.svelte";
	import Todo from "./components/Todo.svelte";

	const todos = new SvelteSet();
	let newTodo = $state.raw("");

	let inputInvalid = $derived.by(() =>
		todos.has(newTodo.trim()) ? true : null,
	);

	function deleteTodo(title) {
		todos.delete(title);
	}

	function addTodo() {
		if (inputInvalid) {
			return;
		}
		todos.add(newTodo.trim());
		newTodo = "";
	}
</script>

<Header></Header>

<main class="container">
	<div role="group">
		<input type="text" bind:value={newTodo} aria-invalid={inputInvalid} />
		<button onclick={addTodo}>Add</button>
	</div>
	<hr />
	{#each todos as todo}
		<Todo title={todo} {deleteTodo}></Todo>
	{/each}
</main>
