<template>
    <div class="lakkana-chart">
        <img class="chart-img" src="../assets/chart.png" alt="">
        
        <div class="one-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
            <img class="star-img" src="../assets/s6.png">
        </div>

        <div class="two-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="three-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="four-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
            <img class="star-img" src="../assets/s6.png">
        </div>

        <div class="five-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="six-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="seven-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="eight-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
            <img class="star-img" src="../assets/s6.png">
        </div>

        <div class="nine-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>


        <div class="ten-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
            <img class="star-img" src="../assets/s6.png">
        </div>


        <div class="eleven-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

        <div class="twelve-clock">
            <img class="star-img" src="../assets/s1.png">
            <img class="star-img" src="../assets/s2.png">
            <img class="star-img" src="../assets/s3.png">
            <img class="star-img" src="../assets/s4.png">
            <img class="star-img" src="../assets/s5.png">
        </div>

    </div>
</template>

<script>
export default {

};
</script>

<style>
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
