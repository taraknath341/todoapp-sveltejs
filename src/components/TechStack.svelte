<script>
   let { techStackShow = $bindable() } = $props();
</script>

<dialog open={techStackShow}>
   <article>
      <header>
         <button
            aria-label="Close"
            rel="prev"
            onclick={() => (techStackShow = null)}
         ></button>
         <p>
            <strong>🛠️ Tech Stack</strong>
         </p>
      </header>
      <div role="group">
         <img
            src="https://raw.githubusercontent.com/picocss/pico/HEAD/.github/logo-dark.svg"
            alt="Picocss"
            width="50px"
         />
         <img
            src="https://icon.icepanel.io/Technology/svg/Svelte.svg"
            alt="Svelte"
            width="50px"
         />
      </div>
   </article>
</dialog>
