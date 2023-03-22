<script>
    import Project from "./Project.svelte";
    import { projects } from "../data.js";

	let index = 0;
    let limit = projects.length;
    let data = {};

    const getProjectData = (count) => {
        data = {
            name: projects[count].title,
            text: projects[count].content,
            media: projects[count].image,
            media2: projects[count].webp,
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

    const last = () => {
        if (index == 0) {
            index = limit -1;
        } else {
            index -= 1;
        }
        getProjectData(index);
    }
</script>

<section class="portfolio">
    <div class="portfolio--buttons">
        <button class="portfolio--last" on:click={last}>
            <svg fill="#ffffff" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"/>
            </svg>
        </button>        
        <button class="portfolio--next" on:click={next}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"/>
            </svg>
        </button>
    </div>

    <Project title={data.name} description={data.text} image={data.media} image2={data.media2} tags={data.tech} url={data.link}/>

    <!-- {#each projects as project, i}
        <Project title={project.title} description={project.content} image={project.image} tags={project.tags} url={project.url}/>
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

        &--buttons {
            display: flex;
            justify-content: center;
        }

        &--next, &--last {
            background-color: $primary-color;
            border-radius: 30px;
            cursor: pointer;
            display: block;
            height: 60px;
            line-height: 1;
            margin: 1rem;
            transition: background-color .3s ease-in-out;
            width: 60px;

            &:hover {
                background-color: $secondary-color;
            }
        }
    }
</style>