<script>
	import router from "page";
	import Index from "./public/index.svelte";
	import Home from "./user/home.svelte";

	let page, params;

	router('/', () => page = Index);
	router('/home/:username', (ctx, next) => {
  	params = ctx.params
  	next()}, () => page = Home);

	router.start();
</script>

<svelte:component this={page} />