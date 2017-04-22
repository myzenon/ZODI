<template>
    <div class="lakkana-chart">
        <h1>{{chartMap}}</h1>
        <img class="chart-img" src="../assets/chart.png" alt="">
        <div v-for="className in Object.keys(chartHTML)" :class="className" v-html="getHTML(chartHTML[className])"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartHTML: {},
            selfUpdate: false,
        };
    },
    props: {
        chartMap: {
            type: Object,
            required: true,
        },
        chartType: {
            type: String,
            required: true,
        },
    },
    created() {
        this.createChart();
        this.$data.selfUpdate = false;
    },
    updated() {
        if (this.$data.selfUpdate) {
            this.$data.selfUpdate = false;
        }
        else {
            this.createChart();
        }
    },
    methods: {
        createChart() {
            this.$data.chartHTML = {};
            const chartClass = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
            const chartMap = this.$props.chartMap;
            if (chartMap) {
                Object.keys(chartMap).forEach((chartPosition) => {
                    if (chartMap[chartPosition] >= 0) {
                        const className = chartClass[chartMap[chartPosition]] + '-clock';
                        if (!this.$data.chartHTML[className]) {
                            this.$data.chartHTML[className] = [];
                        }
                        this.$data.chartHTML[className].push('<img class="star-img" src="' + require('../assets/' + chartPosition + '.png') + '">');
                    }
                });
            }
            this.$data.selfUpdate = true;
        },
        getHTML(array) {
            let contentHTML = '';
            array.forEach((item) => {
                contentHTML += item;
            });
            return contentHTML;
        },
    },
};
</script>

<style>
    .lakkana-chart .star-img {
        width: 4.5vw;
        margin: 4.5% 3.5%;
    }
</style>

<style scoped>
    .lakkana-chart {
        position: relative;
        font-size: 0;
        width: 100%;
    }
    .chart-img {
        width: 100%;
    }
    .zero-clock {
        position: absolute;
        top: 16%;
        left: 43%;
        width: 14%;
        // background-color: #F00;
        text-align: center;
    }
    .one-clock {
        position: absolute;
        top: 16.5%;
        left: 28.5%;
        width: 12%;
        // background-color: #F00;
        text-align: right;
    }
    .two-clock {
        position: absolute;
        top: 28.5%;
        left: 16.25%;
        width: 18%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
    }
    .three-clock {
        position: absolute;
        top: 43%;
        left: 13%;
        width: 27%;
        // background-color: #F00;
        text-align: left;
    }
    .four-clock {
        position: absolute;
        top: 58%;
        left: 17%;
        width: 20%;
        // background-color: #F00;
    }
    .five-clock {
        position: absolute;
        top: 65%;
        left: 28%;
        width: 12%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
        flex-direction: row-reverse;
    }
    .six-clock {
        position: absolute;
        top: 64.5%;
        left: 43%;
        width: 14%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
        justify-content: center;
    }
    .seven-clock {
        position: absolute;
        top: 65%;
        left: 59.5%;
        width: 12%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
    }
    .eight-clock {
        position: absolute;
        top: 58%;
        left: 62.5%;
        width: 20%;
        text-align: right;
        // background-color: #F00;
    }
    .nine-clock {
        position: absolute; 
        top: 43%;
        left: 60%;
        width: 27%;
        // background-color: #F00;
        text-align: right;
    }
    .ten-clock {
        position: absolute;
        top: 28.5%;
        left: 64%;
        width: 18%;
        // background-color: #F00;
        text-align: right;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
        flex-direction: row-reverse;
    }
    .eleven-clock {
        position: absolute;
        top: 16.5%;
        left: 59.5%;
        width: 12%;
        // background-color: #F00;
        text-align: left;
    }
</style>
