<script>
import { link } from "svelte-spa-router";
</script>

<h1>We are sorry!</h1>
<p>The travel tips you are looking for do not exist.</p>
<img src="https://picsum.photos/id/685/800/400" alt="img">
<p>We still have other travel tips you might be interested in!</p>
<a href="/" use:link>
    <h2>Take me home →</h2>
</a>

<style>
    img {
      width: 100%;
    }
</style>