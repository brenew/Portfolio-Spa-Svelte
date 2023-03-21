<script>
    import Card from "./Card.svelte";
    import { projects } from "../data.js";

	let index = 0;
    let limit = projects.length;
    let data = {};

    const getProjectData = (count) => {
        data = {
            name: projects[count].title,
            text: projects[count].content,
            media: projects[count].image,
            tech: projects[count].tags,
            link: projects[count].url
        };
    }

    getProjectData(0);

    const next = () => {
        if (index == (limit -1)) {
            index = 0;
        } else {
            index += 1;
        }
        getProjectData(index);
    }
</script>

<section class="portfolio">

    <button on:click={next}>Next</button>

    <Card title={data.name} description={data.text} image={data.media} tags={data.tech} url={data.link}/>

    <!-- {#each projects as project, i}
        <Card title={project.title} description={project.content} image={project.image} tags={project.tags} url={project.url}/>
    {/each} -->
</section>

<style lang="scss">
    $primary-color: #013047;
    $secondary-color: #219ebc;
    $tertiary-color: #8fcae5;
    $black: #000000;
    $white: #ffffff;
    $text-color: #414042;

    $spacer: 1rem;
    $fontSize: 10px;

    $regular: 400;
    $bold: 600;

    .portfolio {
        margin: 0 auto $spacer*3;
        max-width: 1280px;
        padding: 0 $spacer;
        position: relative;
    }
</style>