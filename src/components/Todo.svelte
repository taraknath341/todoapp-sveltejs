<script>
   const { title, deleteTodo } = $props();
</script>

<div class="todo" role="group">
   <input type="text" value={title} readonly />
   <button onclick={() => deleteTodo(title)}>Delete</button>
</div>
