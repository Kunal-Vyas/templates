<script>
	import router from "page";
	import Footer from "./shared/footer.svelte";
	import Header from "./shared/navigation.svelte";
	import Home from "./user/home.svelte";
	import Index from "./public/index.svelte";
	import List from "./entities/list.svelte";
	import PageNotFound from "./public/404.svelte";

	let page, params;
	let user = {};

	// index page
	router('/', () => page = Index);

	// user home page
	router('/home/:username', 
		(ctx, next) => {
			if(!user) {
				router.redirect('/'); // login
			} else {
				params = ctx.params;
  			next();
			}
		}, () => page = Home);

	// entity list
	router('/entities', () => page = List);

	// catch-all 404
	router('/*', () => page = PageNotFound)

	router.start();
</script>

<Header/>
<svelte:component this={page} params={params} />
<Footer/>