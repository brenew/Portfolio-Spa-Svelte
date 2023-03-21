<script>
	import Router, { link } from "svelte-spa-router";
    export let fullName, profession;
</script>

<header class="header">
    <h1 class="header--title">
      <a href="/" use:link><span class="header--title-text">{fullName}</span></a>
      <small class="header--sub-title">
        <svg x="0px" y="0px" viewBox="0 0 30 18"><path class="st0" d="M9.2,18.1L0,8.9L8.9,0h1.8L1.8,8.9l9.2,9.2H9.2z M19,18.1h1.8L30,8.9L21.1,0h-1.8l8.9,8.9L19,18.1z M18.4,7.6
        V6.3h-0.7l0.2-1.7h-1.7L16,6.3h-1.3l0.2-1.7h-1.7L13,6.3h-0.9v1.4h0.7l-0.3,2.5h-0.9v1.4h0.7l-0.2,1.8h1.7l0.2-1.8h1.3l-0.2,1.8h1.7
        l0.2-1.8h0.9v-1.4h-0.7l0.3-2.5H18.4z M15.5,10.1h-1.3l0.3-2.5h1.3L15.5,10.1z"/></svg> 
        {profession}</small>
    </h1>
</header>

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

    .header {
        background-color: $primary-color;
        padding: $spacer;
        transition: all .3s ease;

        @media (min-width: 768px) {
            padding: $spacer*1.5;
        }

        @media (min-width: 1600px) {
            padding-top: $spacer*3;
        }

        &--title {
            color: $white;
            display: flex;
            flex-direction: column;
            font-size: 22px;
            font-weight: $bold;
            justify-content: space-between;
            line-height: 1.4;
            margin: 0 auto;
            max-width: 1280px;
            text-align: center;

            @media (min-width: 600px) {
                align-items: center;
                flex-direction: row;
                text-align: left;
            }

            a {
                color: white;
            }
        }
        &--sub-title {
            font-size: 14px;
            display: inline-flex;
            margin: 0 auto;

            @media (min-width: 600px) {
                margin: 0;
                text-align: right;
            }
        }

        svg {
            margin-right: $spacer*0.5;
            width: 30px;
        }

        path {
            fill: $tertiary-color;
        }        
    }    
</style>