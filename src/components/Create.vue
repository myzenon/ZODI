<template>
    <div>
        <div class="wrapper">
            <section id="section1" class="hero is-primary section1">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Create a Lakkana Chart
                        </h1>
                    </div>
                </div>
            </section>
            <div class="containerCreate">
                <div class="field">
                    <label class="label font-style">Select from Profiles</label>
                    <p class="control">
                        <span class="select">
                            <select>
                                <option>No</option>
                                <option>Profile 1</option>
                                <option>Profile 2</option>
                                <option>Profile 3</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Date / Time of Birth</label>
                    <p class="control">
                        <input class="input" type="datetime-local">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Hometown</label>
                    <p class="control">
                        <span class="select">
                            <select>
                                <option>Thailand</option>
                                <option>America</option>
                                <option>Australia</option>
                                <option>Korea</option>
                            </select>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <router-link to="/createResult">
            <div class="footer-button">
                CREATE
            </div>
        </router-link>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .containerCreate {
        padding: 12vw 10vw 30vw 10vw;
    }
    .font-style {
        color: #bbb;
        font-size: 5.2vw;
    }
    .center-core {
        text-align: center;
    }
    .footer-button {
        position: fixed;
        color: white;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        background-color: #3c0d76;
        padding: 4.5vmin 0;
        font-size: 5.2vw;
        font-weight: bold;
    }
    select, .select {
        width: 100%;
    }
    .wrapper {
        background-color: #222;
    }
    .section1 {
        background-image: url('../assets/sec1.jpg');
        background-size: cover;
        background-position: center right;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
    }
    .section1 .hero-body {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
    }
</style>
