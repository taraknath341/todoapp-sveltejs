<script>
   import { blur } from "svelte/transition";
   const { title, deleteTodo } = $props();
</script>

<div class="todo" role="group" transition:blur={{ duration: 300 }}>
   <input type="text" value={title} readonly />
   <button onclick={() => deleteTodo(title)}>Delete</button>
</div>
