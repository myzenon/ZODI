<template>
    <div class="wrapper"> 
        <div class="lakkana-chart">
            <img class="chart-img" src="../assets/chart.png" alt="">
        
            <div class="one-clock">
                <img class="star-img" src="../assets/s1.png">
            </div>

            <div class="two-clock">
                <img class="star-img" src="../assets/s2.png">
            </div>

            <div class="three-clock">
                <img class="star-img" src="../assets/s3.png">
            </div>

            <div class="four-clock">
                <img class="star-img" src="../assets/s4.png">
            </div>

            <div class="five-clock">
                <img class="star-img" src="../assets/s5.png">
            </div>

            <div class="six-clock">
                <img class="star-img" src="../assets/s6.png">
            </div>

            <div class="seven-clock">
                <img class="star-img" src="../assets/s7.png">

            </div>

            <div class="eight-clock">
                <img class="star-img" src="../assets/s8.png">
            </div>

            <div class="nine-clock">
                <img class="star-img" src="../assets/s9.png">
            </div>


            <div class="ten-clock">
                <img class="star-img" src="../assets/s10.png">
            </div>


            <div class="eleven-clock">
                <img class="star-img" src="../assets/slak.png">
            </div>

            <div class="twelve-clock">
            </div>

            <div>
            </div>

        </div>
        <router-link to="/">
            <div class="footer-button">
                BACK HOME
            </div>
        </router-link>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
    .lakkana-chart {
        position: relative;
        font-size: 0;
        width: 100%;
    }
    .lakkana-chart .star-img {
        width: 4.5vw;
        margin: 4.5% 3.5%;
    }
    .chart-img {
        width: 100%;
    }
    .one-clock {
        position: absolute;
        top: 16%;
        left: 43%;
        width: 14%;
        // background-color: #F00;
        text-align: center;
    }
    .two-clock {
        position: absolute;
        top: 16.5%;
        left: 59.5%;
        width: 12%;
        // background-color: #F00;
        text-align: left;
    }
    .three-clock {
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
    .four-clock {
        position: absolute; 
        top: 43%;
        left: 60%;
        width: 27%;
        // background-color: #F00;
        text-align: right;
    }
    .five-clock {
        position: absolute;
        top: 58%;
        left: 62.5%;
        width: 20%;
        text-align: right;
        // background-color: #F00;
    }
    .six-clock {
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
        top: 64.5%;
        left: 43%;
        width: 14%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
        justify-content: center;
    }
    .nine-clock {
        position: absolute;
        top: 58%;
        left: 17%;
        width: 20%;
        // background-color: #F00;
    }
    .ten-clock {
        position: absolute;
        top: 43%;
        left: 13%;
        width: 27%;
        // background-color: #F00;
        text-align: left;
    }
    .eleven-clock {
        position: absolute;
        top: 28.5%;
        left: 16.25%;
        width: 18%;
        // background-color: #F00;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap-reverse;
    }
    .twelve-clock {
        position: absolute;
        top: 16.5%;
        left: 28.5%;
        width: 12%;
        // background-color: #F00;
        text-align: right;
    }
    .wrapper {
        background-color: #222;
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
</style>
