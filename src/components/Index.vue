<template>
    <div class="wrapper">
        <section id="section1" class="hero is-primary section1">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Create a Lakkana Chart
                    </h1>
                    <h2 class="subtitle">
                        Lakkana Chart is a thai zodiac diagram which displays a star position at your birth date/time.
                    </h2>
                    <router-link to="/create" class="button is-dark">Find out your Lakkana</router-link>
                </div>
            </div>
        </section>
        <section id="section2" class="hero is-primary section2">
            <div class="hero-body">
                <div class="container">
                    <div class="icon-container">
                        <img src="../assets/table.png" alt="table">
                    </div>
                    <h1 class="title">
                        Lakkana in Table form
                    </h1>
                    <h2 class="subtitle">
                        Transform a Lakkana chart into the table form
                    </h2>
                    <a class="button is-light is-outlined">Transform to table</a>
                </div>
            </div>
        </section>
        <section id="section3" class="hero is-primary section3">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        How to find your Lakkana
                    </h1>
                    <h2 class="subtitle">
                        Learn how to find your Lakkana by yourself through the excerise.
                    </h2>
                    <router-link to="/exercise" class="button is-dark">Try it !!</router-link>
                </div>
            </div>
        </section>
        <section id="section4" class="hero is-primary section4">
            <div class="hero-body">
                <div class="container">
                    <div class="icon-container">
                        <img src="../assets/pie.png" alt="pie">
                    </div>
                    <h1 class="title">
                        Lakkana Chart from Table
                    </h1>
                    <h2 class="subtitle">
                        Transform a Lakkana table into chart form.
                    </h2>
                    <a class="button is-light is-outlined">Transform to Chart</a>
                </div>
            </div>
        </section>
        <section class="hero is-primary section5">
            <div class="hero-body">
                <div class="container">
                    <div class="icon-container">
                    </div>
                    <h1 class="title">
                        CAMT CMU
                    </h1>
                    <h2 class="subtitle">
                        Our team are come from College of Arts Media and Technology at Chiang Mai University
                    </h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.808413910471!2d98.95059332105117!3d18.79992761407233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85fbac3033920444!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lio4Li04Lil4Lib4LiwIOC4quC4t-C5iOC4rSDguYHguKXguLDguYDguJfguITguYLguJnguYLguKXguKLguLU!5e0!3m2!1sth!2sth!4v1491637654507" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    created() {
        const component = this;
        this.$parent.$parent.$on('scroll', (elementID) => {
            component.scrollTo(elementID);
        });
    },
    methods: {
        scrollTo(elementID) {
            const top = document.body.scrollTop + this.$el.querySelector(`#${elementID}`).getBoundingClientRect().top;
            this.smoothScroll(top);
        },
        smoothScroll(top) {
            const diff = (top - window.scrollY) / 8;
            if (Math.abs(diff) > 1) {
                window.scrollTo(0, (window.scrollY + diff));
                clearTimeout(window.TSS);
                window.TSS = setTimeout(this.smoothScroll, 5, top);
            } else {
                window.scrollTo(0, top);
            }
        },
    },
};
</script>

<style scoped>
    .hero { 
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .icon-container {
        text-align: center;
        margin: 0.5rem 0;
    }
    .section1 {
        background-image: url('../assets/sec1.jpg');
        background-size: cover;
        background-position: center right;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
    }
    .section1 .hero-body {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
    .section1 .button {
        background-color: rgb(110, 105, 215);
    }
    .section2 {
        background-color: #0b0611;
    }
    .section2 img {
        height: 17vmax;
    }
    .section3 {
        background-image: url('../assets/sec2.png');
        background-size: cover;
        background-position: center right;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.7);
    }
    .section4 {
        background-color: #1a0f2a;
    }
    .section4 img {
        height: 33vmax;
    }
    .section5 {
        background-color: #7a52b5;
    }
</style>
