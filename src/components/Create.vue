<template>
    <div class="wrapper">
        <div class="container">
            <div class="field-form">
                <h1 class="title is-1 font-color">Create Lakkana Chart</h1>
                <div class="field">
                    <label class="label font-color">Profiles</label>
                    <p class="control">
                        <span class="select">
                            <select>
                                <option>New Profiles</option>
                                <option>Profile 1</option>
                                <option>Profile 2</option>
                                <option>Profile 3</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label font-color">Full name</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Text full name">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-color">Birth Date</label>
                    <p class="control">
                        <input class="input" type="datetime-local">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-color">Hometown</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Location">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-color">Date of prediction</label>
                    <p class="control">
                        <input class="input" type="datetime-local">
                    </p>
                </div>
                <div class="field">
                    <label class="label font-color">Predict Location</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Location">
                    </p>
                </div>

                <div class="nav-left">
                    <a class="nav-item">
                    </a>
                </div>
                <div class="nav-center">
                    <a class="nav-item">
                        <a class="button is-info is-inverted is-outlined">Create</a>
                    </a>
                </div>
                <div class="nav-right">
                    <a class="nav-item">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .field-form{
        padding: 30px 80px 30px 80px;
    }
    body{
        background-color: #222;
    }
    .font-color{
        color: #bbb;
    }
    .center-core{
        text-align: center;
    }
</style>
