<template>
    <div>
    <div class="wrapper">
        <div class="container">
                <div class="field">
                    <label class="label font-style">Profiles</label>
                    <p class="control">
                        <span class="select">
                            <select  style="width:100%;">
                                <option>New Profiles</option>
                                <option>Profile 1</option>
                                <option>Profile 2</option>
                                <option>Profile 3</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Full name</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Text full name">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Birth Date</label>
                    <p class="control">
                        <input class="input" type="datetime-local">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Hometown</label>
                    <p class="control">
                        <span class="select">
                            <select  style="width:100%;">
                                <option>Thailand</option>
                                <option>America</option>
                                <option>Australia</option>
                                <option>Korea</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Date of prediction</label>
                    <p class="control">
                        <input class="input" type="datetime-local">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-style">Predict Location</label>
                    <p class="control">
                        <span class="select">
                            <select style="width:100%;">
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
        <router-link to="/lakkanaChart">
            <div class="footer-button">
                CREATE
            </div>
        </router-link>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .container {
        background-color: #212121;
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
        .select {
            width: 100%;
        }
</style>
