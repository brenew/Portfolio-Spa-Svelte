<script>
import { link } from "svelte-spa-router";
import urlSlug from "url-slug";
export let title, description, image, tags, url;
</script>

<div class="project">
  <figure class="project--showcase">
    <img src={image} alt="{title + tags}" class="project--image" />
  </figure>
    <div class="project--details">
      <div class="project--header">
        <h2 class="project--title"><a href={`/article/${urlSlug(title)}`} use:link>{title}</a></h2>
        <span class="project--stack">{tags}</span>
      </div>
      <div class="project--body">
        <div class="project--description">
          <p>{description}</p>
          <a href="{url}" target="_blank">Go See it</a>
        </div>
      </div>
    </div>
</div>

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

  .project {
      background-color: lighten($black, 20%);
      border: 2px solid $secondary-color;
      border-left-color: lighten($secondary-color, 10%);
      border-right-color: lighten($secondary-color, 10%);
      border-top-color: lighten($secondary-color, 30%);
      border-radius: $spacer;
      box-shadow: 0 0 15px rgba(0,0,0,.5);
      margin: 0 auto;
      padding: $spacer;

      @media (min-width: 1600px) {
          padding: $spacer*1.5 $spacer;
      }

      &--showcase {
          max-height: 500px;
          overflow: hidden;
          overflow-y: auto;

          @media (min-width: 1400px) {
              max-height: 700px;
          }
      }

      &--image {
        width: 100%;
      }

      &--details {
          background-color: rgba(255,255,255,.9);
          border: 4px solid $primary-color;
          border-radius: $spacer;
          box-shadow: 0 0 20px rgba(255,255,255,.25);
          left: 50%;
          margin: 0 auto 0 -45%;
          width: 90%;
          padding: $spacer;
          position: absolute;
          top: 480px;

          @media (min-width: 1400px) {
              padding: $spacer*2;
          }
      }
      &--header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding-bottom: $spacer*0.5;
      }
      &--title {
          color: $secondary-color;
          font-size: $fontSize*2;
          line-height: 1.4;
      }
      &--stack {
          display: none;
          font-size: $fontSize*1.4;

          @media (min-width: 1024px) {
              display: block;
          }   
      }
      &--body {
          border-top: 1px solid $primary-color;
          display: flex;
          flex-direction: column;
          padding-top: $spacer*1.5;

          @media (min-width: 1024px) {
              flex-direction: row;
          }
      }
      &--description {
          color: $text-color;
          line-height: 1.5;

          @media (min-width: 1024px) {
              max-width: 960px;
              padding-right: $spacer*2;
          }
      }
      // &--status {
      //     align-items: center;
      //     border: 1px solid $primary-color;
      //     color: $secondary-color;
      //     display: inline-flex;
      //     font-size: 14px;
      //     justify-content: center;
      //     line-height: 1.4;
      //     margin-bottom: auto;
      //     padding: $spacer;
      //     text-align: center;
      //     // width: 300px;
      // }
  }
</style>