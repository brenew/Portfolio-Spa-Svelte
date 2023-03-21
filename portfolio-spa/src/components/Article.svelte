<script>
    import urlSlug from "url-slug";
    import { projects } from "../data.js";
    import NotFound from "../components/NotFound.svelte";

    export let params = {};
    let article;

    projects.forEach((project, index) => {
      if (params.title === urlSlug(project.title)) {
        article = project;
      }
    });
</script>

{#if article}
    <div>
        <h1>{article.title}</h1>
        <p>Tags: {article.tags}</p>
        <img src={article.image} alt="img">
        <p>{article.content}</p>
    </div>
{:else}
    <NotFound/>
{/if}

<style>
    img {
      max-width: 100%;
    }

    p {
      text-align: justify;
    }
</style>