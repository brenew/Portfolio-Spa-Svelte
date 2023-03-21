<script>
	import Router, { link } from "svelte-spa-router";
	import { routes } from "./routes.js";
	import Header from "./components/Header.svelte";
	import Nav from "./components/Nav.svelte";
	export let name, title;
</script>

<Header fullName={name} profession={title} />
<Nav />
<main>
  <Router {routes}/>
</main>

<style lang="scss" global>
	$spacer: 1rem;	
	// Set the box sizing
	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing:border-box;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		-o-font-smoothing: antialiased;
		font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
		outline: none;
		-webkit-overflow-scrolling: touch;
	}

	// Reset everything used
	html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,address,img,small,strong,ul,ol,li,article,aside,figure,figcaption,footer,header,menu,nav,section {
		font-size: 100%;
		padding: 0;
		border: 0;
		margin: 0;
		vertical-align: baseline;
	}
	body, figure, li {
		line-height: 1;
	}
	ol , ul {
		margin: 0;
		padding-left: 40px;
	}
	img {
		max-width: 100%;
	}
	button {
		border: none;
		outline: none;
	}
	p, ul, ol {
		margin-bottom: $spacer;
	}
	strong {
		font-weight: 600;
	}

</style>