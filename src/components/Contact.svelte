<section class="contact contact-region">
    <p>I'm a <strong>frontend web developer</strong> living in beautiful Tampa, Florida. I have more than <strong>15 years</strong> of experience as a designer and I've focused the last 12 years on building UI/UX solutions.</p>
    <p>I spend most of my professional time making layout components, building webapps in <strong>perfect html</strong> and <strong>masterful CSS</strong> (SCSS). I also enjoy build WordPress sites in php, and I have extensive experience working in .Net projects.</p>
    <p>My degree is in <strong>graphic design</strong>, which means I love hand-drawn sketches, wireframes, UI plans, and <strong>I particularly enjoy</strong> designing mockups in Photoshop.</p>
    <p>If you have a cool project and you would like my help, drop me an email and lets make something cool.</p>
    <p>You can also drop me a line if you'd like advice on Bass Fishing or are a baseball scout and want to see videos of my son slinging the ball.</p>
    <address class="contact--partial-content">
      <a href="tel:8133104933" title="Click to call from your mobile phone">(813) 310-4933</a>
      <a href="mailto:brian@splitelementdesign.com" title="Send me an email">Email Me</a>
    </address>
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

.contact {
    margin: 0 auto $spacer*3;
    max-width: 480px;
    line-height: 1.6;
    padding: 0 $spacer;

    &--partial-content {
        margin-top: $spacer;;
    }

    address {
        margin-top: $spacer*2;
    }

    a {
        border: 1px solid $secondary-color;
        color: $secondary-color;
        display: block;
        padding: $spacer;
        text-align: center;
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
            background-color: $secondary-color;
            color: $white;
        }

        & + a {
            border-top: none;
        }
    }
}
</style>