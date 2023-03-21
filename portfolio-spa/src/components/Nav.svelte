<script>
    import Router, { link } from "svelte-spa-router";
</script>

<nav class="navigation">
    <ul class="menu" id="app_menu">
        <li class="menu--item">
            <a href="/" use:link class="menu--item-action" data-for="portfolio-region">Portfolio</a>
        </li>
        <li class="menu--item">
            <a href="/resume" use:link class="menu--item-action">Resume</a>
        </li>
        <li class="menu--item">
            <a href="/contact" use:link class="menu--item-action">Contact</a>
        </li>
    </ul>
</nav>

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

.navigation {
    padding: $spacer*2 $spacer;
    text-align: center;

    @media (max-width: 768px) {
        box-shadow: 0 3px 3px -2px rgba(0,0,0,.25);
        margin-bottom: 1rem;
    }
}
.menu {
    display: inline-flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    position: relative;

    @media (min-width: 768px) {
        margin-bottom: $spacer;       
    }

    // menu button
    &--item-action {
        background-color: lighten($text-color, 60%);
        border: none;
        color: $primary-color;
        padding: $spacer*0.5 $spacer;
        position: relative;
        outline: none;
        text-transform: uppercase;
        transition: all .3s ease;

        @media (min-width: 768px) {
            font-size: $fontSize*1.6;
            padding: $spacer*.75 $spacer*2;
        }

        &.showing, &:focus, &:active {
            background-color: $primary-color;
            color: white;
        }

        &:hover {
            background-color: lighten($primary-color, 10%);
            color: lighten($text-color, 80%);
            cursor: pointer;
        }
    }
    @media (min-width: 768px) {

        // default before/after
        &--item:first-of-type .menu--item-action::before,
        &--item:last-of-type .menu--item-action::after {
            background-color: lighten($text-color, 60%);
            content: '';
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            transform: skew(-45deg);
            transform-origin: 100% 0;
            transition: all .3s ease;
            z-index: -1;
        }

        // before postion
        &--item:first-of-type .menu--item-action::before {
            left: 0;
        }
        // after postion
        &--item:last-of-type .menu--item-action::after {
            left: 3.5rem;
        }

        // hover before/after
        &--item:first-of-type .menu--item-action:hover::before,
        &--item:last-of-type .menu--item-action:hover::after {
            background-color: lighten($primary-color, 10%);                    
        }

        // active before/after
        &--item:first-of-type .menu--item-action.showing::before,
        &--item:last-of-type .menu--item-action.showing::after {
            background-color: $primary-color;
        }

        // active & hover before /after
        &--item:first-of-type .menu--item-action.showing:hover::before,
        &--item:last-of-type .menu--item-action.showing:hover::after {
            background-color: lighten($primary-color, 10%);                    
        }
    }
}    
</style>