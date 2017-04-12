<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import { Navbar } from './components';

export default {
    components: {
        navbar: Navbar,
    },
};
</script>

<style>
    html {
        background-color: #333;
    }
    .wrapper {
        position: relative;
    }
</style>
