<script>
   import * as localDB from "../methods/localstorage.js";
   import TechStack from "./TechStack.svelte";

   let icon = $state.raw(localDB.getTheme() || "☀️");

   function toggleTheme() {
      if (icon === "🌙") {
         document.documentElement.setAttribute("data-theme", "dark");
         localDB.setTheme(icon);
         icon = "☀️";
      } else {
         document.documentElement.setAttribute("data-theme", "light");
         localDB.setTheme(icon);
         icon = "🌙";
      }
   }
   toggleTheme();

   let techStackShow = $state.raw(null);
</script>

<header class="container">
   <nav>
      <ul>
         <li><h2>Todo App</h2></li>
      </ul>
      <ul>
         <li>
            <button onclick={() => (techStackShow = true)}>🛠️</button>
         </li>
         <li><button onclick={toggleTheme}>{icon}</button></li>
      </ul>
   </nav>
</header>

<TechStack bind:techStackShow></TechStack>
