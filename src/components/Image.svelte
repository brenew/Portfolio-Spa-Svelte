<script>
    export let jpg, webp, alt;
</script>

<picture class="project--showcase">
    <source srcset={webp} type="image/webp">
    <source srcset={jpg} type="image/jpeg"> 
    <img src={jpg} alt={alt} class="project--image" />
</picture>
<!-- <figure class="project--showcase">
    <img src={jpg} alt="{alt}" class="project--image" />
</figure> -->

<style>
.project--showcase {
    display: block;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;

    @media (min-width: 1400px) {
        max-height: 700px;
    }
}

.project--image {
    width: 100%;
}
</style>