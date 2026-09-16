<script>
   import { blur } from "svelte/transition";
   const { title, deleteTodo } = $props();
</script>

<div class="todo" role="group" transition:blur>
   <input type="text" value={title} readonly />
   <button onclick={() => deleteTodo(title)}>Delete</button>
</div>
