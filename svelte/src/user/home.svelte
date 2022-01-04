<script>
  import { onMount } from "svelte";

  let username = 'world';
	export let params;

  onMount(async () => {
    username = params.username;
  });
</script>

<div class="container">
  <main>
    <h1>Hello {username}!</h1>
  </main>  
</div>