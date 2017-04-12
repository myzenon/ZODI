<template>
    <div>
        <nav class="nav">

            <div class="nav-left">
                <img src="../assets/zodi.png" alt="zodi">
            </div>

            <span class="nav-toggle" @click="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </span>
            
        </nav>

        <div :class="{ 'is-active': isActive }" class="nav-menu">
            <a class="nav-item" v-if="$route.name !== 'index'" @click="moveTo('index')">
                <i class="fa fa-home"></i>Home
            </a>
            <a class="nav-item" v-if="$route.name !== 'create'" @click="moveTo('create')">
                <i class="fa fa-plus"></i>Create a Lakkana Chart
            </a>
            <a class="nav-item" v-if="$route.name !== 'chart-table'" @click="moveTo('chart-table')">
                <i class="fa fa-table"></i>Transform Lakkana Chart to Table
            </a>
            <a class="nav-item" v-if="$route.name !== 'exercise'" @click="moveTo('exercise')">
                <i class="fa fa-pencil"></i>Exercise to find a Lakkana
            </a>
            <a class="nav-item" v-if="$route.name !== 'table-chart'" @click="moveTo('table-chart')">
                <i class="fa fa-pie-chart"></i>Transform Lakkana Table to Chart
            </a>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        hamburger() {
            this.$data.isActive = !this.$data.isActive;
        },
        moveTo(page) {
            this.$data.isActive = false;
            if (this.$route.name === 'index') {
                let elementID = '';
                switch (page) {
                case 'create':
                    elementID = 'section1';
                    break;
                case 'chart-table':
                    elementID = 'section2';
                    break;
                case 'exercise':
                    elementID = 'section3';
                    break;
                case 'table-chart':
                    elementID = 'section4';
                    break;
                default:
                }
                this.scrollTo(elementID);
            } else {
                this.$router.push({ name: page });
            }
        },
        scrollTo(elementID) {
            this.$parent.$parent.$emit('scroll', elementID);
        },
    },
};

</script>


<style scoped>
    .nav {
        background-color: #111;
    }
    img {
        margin: 0.5rem 0.75rem;
        max-height: 2.25rem;
    }
    .nav-toggle {
        display: initial;
    }
    .nav-toggle span {
        background-color: #FFF;
    }
    .nav-toggle:hover {
        background-color: #333;
    }
    .nav-menu {
        position: initial;
        background-color: #333;
        display: block;
        max-height: 0;
        transition: max-height 0.65s ease-out;
    }
    .is-active {
        max-height: 1000px;
        transition: max-height 0.65s ease-in;
    }
    .nav-item {
        color: #BBB;
        border-top: 1px solid rgba(219, 219, 219, 0.5);
        padding: 0.75rem;
    }
    .nav-item:hover {
        color: #BBB;
    }
    .nav-item i {
        margin-left: 0.5rem;
        margin-right: 1rem;
    }
</style>
