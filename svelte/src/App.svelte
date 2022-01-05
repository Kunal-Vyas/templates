<script>
	import router from "page";
	import Home from "./user/home.svelte";
	import Index from "./public/index.svelte";
	import PageNotFound from "./public/404.svelte";

	let page, params;
	let user = {};

	router('/', () => page = Index);
	router('/home/:username', 
		(ctx, next) => {
			if(!user) {
				router.redirect('/'); // login
			} else {
				params = ctx.params;
  			next();
			}
		}, () => page = Home);
	
	// catch-all 404
	router('/*', () => page = PageNotFound)

	router.start();
</script>

<svelte:component this={page} params={params} />