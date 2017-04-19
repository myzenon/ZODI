<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
    components: {
        navbar: Navbar,
    },
};
</script>

<style>
    html {
        background-color: #222;
    }
    .wrapper {
        position: relative;
    }
</style>
