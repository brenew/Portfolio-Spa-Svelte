<section class="resume resume-region">
    <div class="resume--container">
        <div class="resume--content">
            <div class="resume--partial jobs">
                <h3 class="resume--partial-heading">Work Experience</h3>
                <div class="resume--partial-content job">
                <h4 class="job--title">Mercury Works - Tampa, Florida / 2011-2023</h4>
                <p class="job--description">Fast-paced agency where my work focused on the <strong>design and development</strong> of SaaS web apps, eCommerce apps, mobile apps, and websites. I built web and mobile solutions with a wide range of languages and tools including <strong>JavaScript</strong>, HTML5, CSS4, <strong>React</strong>, Material UI, Next JS, .NET MVC, and <strong>PHP</strong>. I’m well versed Azure DevOps, Jenkins, and GitHub. I’m a stickler for <strong>perfect HTML</strong> and I love styling with <strong>SASS</strong>. I’ve built a couple dozen <strong>WordPress</strong> sites, I’m able to achieve great <strong>performance scores</strong>, and I’m passionate about <strong>ADA compliance</strong>.</p>
                <ul class="job--highlights">
                    <li>2020: WordPress Team Lead</li>
                    <li>2019: UX/UI Team Lead</li>
                    <li>2017: Promoted to Senior Frontend Developer</li>
                    <li>2013: Promoted to Interface Design Team Lead</li>
                </ul>
                </div>
                <div class="resume--partial-content job">
                <h4 class="resume--partial-subheading job--title">Zelen Communications - Tampa, Florida / 2011</h4>
                <p class="job--description">My primary responsibilities included building custom themes and interfaces with HTML5, CSS, & JS (usually but not always for the WordPress environment). I also managed internal email services and worked with the marketing lead to promote company accomplishments and services.</p>
                </div>
                <div class="resume--partial-content job">
                <h4 class="job--title">PlazAdvisors - Tampa, Florida / 2006-2011</h4>
                <p class="job--description">Primary responsibilities involved designing websites, marketing packages, and offering memorandums for commercial real estate brokerage deals.</p>
                </div>
            </div>
            <div class="resume--partial education">
                <h3 class="resume--partial-heading">Education</h3>
                <div class="resume--partial-content degree">
                <h4 class="resume--partial-subheading degree--title">Bachelors of Fine Arts in Graphic Design</h4>
                <p class="degree--school">Art Institute of Tampa / 2004-2006</p>
                <p class="degree--school">Art Institute of Ft. Lauderdale / 2002-2004</p>
                </div>
            </div>
            <div class="resume--partial certifications">
                <h3 class="resume--partial-heading">Certifications</h3>
                <div class="resume--partial-content certification">
                <p class="resume--partial-subheading certification--title">Microsoft 70-480 Certification / 2017</p>
                <p class="resume--partial-subheading certification--title">USF Continued Education JavaScript Certification / 2013</p>
                </div>
            </div>
            <div class="resume--partial references">
                <h3 class="resume--partial-heading">References</h3>
                <div class="resume--contact">
                <h4 class="resume--partial-subheading resume--contact-name">Available Upon Request</h4>
                <p class="resume--contact-title">If you know of an opportunity that might be a good fit, please contact me and I will provide my full resume with References and anything else you'd like to see.</p>
                </div>
            </div>
        </div>
        <div class="resume--sidebar">
            <div class="resume--partial contact-info">
                <h3 class="resume--partial-heading">Contact Information</h3>
                <div class="resume--partial-content">
                <p><a href="tel:8133104933">(813) 310-4933</a>
                <a href="mailto:brian@splitelementdesign.com">Email Me</a></p>
                </div>
            </div>
            <div class="resume--partial proficiencies">
                <h3 class="resume--partial-heading">Expert Proficiencies</h3>
                <div class="resume--partial-content">
                <ul class="resume--partial-list">
                    <li>HTML Standards</li>
                    <li>SCSS/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next JS</li>
                    <li>jQuery</li>
                    <li>UX & UI Planning and Design</li>
                    <li>WordPress Themes & Plugins</li>
                    <li>Performance Optimization</li>
                    <li>ADA Compliance</li>
                    <li>GTM & Google Analytics</li>
                    <li>Responsive Design</li>
                </ul>
                </div>
            </div>
            <div class="resume--partial skills">
                <h3 class="resume--partial-heading">Other Skills</h3>
                <div class="resume--partial-content">
                <ul class="resume--partial-list">
                    <li>Progressive Web Apps</li>
                    <li>Svelte JS</li>
                    <li>REST API</li>
                    <li>Typescript</li>
                    <li>Knockout</li>
                    <li>Angular</li>
                    <li>.NET MVC</li>
                    <li>GIT</li>
                    <li>Azure DevOps</li>
                    <li>SonarQube</li>
                    <li>Adobe XD</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
                </div>
            </div>
            <div class="resume--partial hobbies">
                <h3 class="resume--partial-heading">Hobbies</h3>
                <div class="resume--partial-content">
                <ul class="resume--partial-list">
                    <li>Chess</li>
                    <li>Fishing</li>
                    <li>Meat smoking amateur</li>
                    <li>Travel baseball w/my boy</li>
                    <li>Buccaneer football fan</li>
                    <li>Rays baseball</li>
                    <li>Expert at hanging out</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
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

.resume {
    margin: $spacer*2 auto $spacer*3;
    max-width: 1280px;
    padding: 0 $spacer*2;

    @media (min-width: 768px) {
        margin-top: 0;
    }
    @media (min-width: 1440px) {
        padding: 0;
    }

    &--container {
        @media (min-width: 768px) {
            display: flex;
        }
    }

    &--content {
        padding-bottom: $spacer;

        @media (min-width: 768px) {
            padding-right: $spacer*2;
        }
    }
    &--sidebar {

        @media (min-width: 768px) {
            min-width: 320px;
        }

        li {
            line-height: 1.6;
        }
    }

    &--partial + &--partial {
        margin-top: $spacer*1.5;

        @media (min-width: 768px) {
            margin-top: $spacer*2;
        }
        @media (min-width: 1280px) {
            margin-top: $spacer*2.5;
        }
    }

    &--partial-heading {
        color: $secondary-color;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: $spacer;
        text-transform: uppercase;

        @media (min-width: 1280px) {
            margin-bottom: $spacer*1.5;
        }
    }

    &--partial-content {
        border-left: 1px solid $tertiary-color;
        padding-left: $spacer;

        @media (min-width: 768px) {
            padding-left: $spacer*2;
        }

        ul {
            list-style: none;
            padding-left: 0;
        }
    }

    &--partial-subheading {
        color: $primary-color;
        font-weight: 600;
        margin-bottom: $spacer*0.75;
    }

    &--partial-subheading + &--partial-subheading {
        margin-top: $spacer*1.25;
    }


    p {
        line-height: 1.6;
        margin-bottom: 0;
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

.job {

    &--title {
        color: $primary-color;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: $spacer*0.75;
    }

    &--description {
        padding-bottom: $spacer;
    }

    &--highlights {
        margin-bottom: 0;

        li {
            line-height: 1.4;
            padding: $spacer*0.5 0;
        }
    }

    & + .job {
        padding-top: $spacer*1.25;

        @media (min-width: 768px) {
            padding-top: $spacer*2;
        }
    }
}    
</style>