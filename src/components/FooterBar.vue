<template>
    <div class="footer-bar">
        {{name}}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
    .footer-bar {
        background-color: #3C0D76;
        color: #FFF;
        font-size: 1rem;
        padding: 2.5vh 0;
        text-align: center;
        box-shadow: 1px 0px 10px #1A1A1A;
        cursor: pointer;
    }
    .footer-bar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
