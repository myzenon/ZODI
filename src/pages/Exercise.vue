<template>
    <div>
        <div v-if="page === 'lec0'" id="lec0">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h2>
                        Welcome to Exercise
                    </h2>
                    <h4>
                        This exercise will let you know how to find a Lakkana zodiac from following birth information.
                    </h4>
                    <h3>
                        <div>Date of Birth</div>
                        <div>
                            <span>20 July 2000</span>
                        </div>
                        <div>
                            Time of Birth
                        </div>
                        <div>
                            <span>10:17</span>
                        </div>
                    </h3>
                </div>
            </div>
            <div @click.stop="changePage('lec1')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'lec1'" id="lec1">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h2>
                        From the following chart, we have to find a start point from the birth month.
                    </h2>
                    <img src="../assets/chart-month-time.png" alt="">
                </div>
            </div>
            <div @click.stop="changePage('ex1')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'ex1'" id="ex1">
            <div class="wrapper">
                <div class="question">
                    <div class="container">
                        <img src="../assets/chart-month-time.png" alt="">
                        Where is the index of start point ?
                    </div>
                </div>
                <div class="answers-box">
                    <div @click="incorrectAnswer" class="answer">At point 1</div>
                    <div @click.stop="changePage('lec2')" class="answer">At point 4</div>
                    <div @click="incorrectAnswer" class="answer">At point 7</div>
                    <div @click="incorrectAnswer" class="answer">At point 10</div>
                </div>
            </div>
        </div>

        <div v-if="page === 'lec2'" id="lec2">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h2>
                        Each of chart slot has a different value. We will find a Lakkana zodiac from a calculation of these value.
                    </h2>
                    <img src="../assets/chart-month-time.png" alt="">
                </div>
            </div>
            <div @click.stop="changePage('lec3')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'lec3'" id="lec3">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h4>
                        Now we know that the start point is on the <span style="color: #FC0000;">red</span> cursor.
                    </h4>
                    <h2>
                        But what is the <span>start value</span> ?
                    </h2>
                    <h3>
                        No, not start from 0 !
                    </h3>
                    <img src="../assets/chart-month-time-july.png" alt="">
                </div>
            </div>
            <div @click.stop="changePage('lec4')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'lec4'" id="lec4">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h4>
                        GET IT FROM <span style="color: #d772cf;">BIRTH DAY</span> !
                    </h4>
                    <h3>
                        The start day in every chart slot is <span style="color: #dacf9c;">16</span>.
                    </h3>
                    <h3>
                        Find amount of the rest days before ...
                    </h3>
                    <h3>
                        <a style="color: #d772cf;">20</a> - 16 = 4 | 4 + <a style="color: #acffb8;">1</a> => <span>5 DAYS</span><br><small style="color: #acffb8;">(You have to count itself)</small>
                    </h3>
                    <h4>
                        So, the start-value formulation is 
                    </h4>
                    <h3 style="color: #a8c6e8;">
                        (max-value slot) * (days) / 30
                    </h3>
                    <img src="../assets/chart-month-time-july.png" alt="">
                </div>
            </div>
            <div @click.stop="changePage('ex2')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'ex2'" id="ex2">
            <div class="wrapper">
                <div class="question">
                    <div class="container">
                        What is the start-value ?
                        <br>
                        <i style="color: #AAA;">(120 * 5) / 30</i>
                    </div>
                </div>
                <div class="answers-box">
                    <div @click="incorrectAnswer" class="answer">10</div>
                    <div @click="incorrectAnswer" class="answer">15</div>
                    <div @click.stop="changePage('lec5')" class="answer">20</div>
                    <div @click="incorrectAnswer" class="answer">30</div>
                </div>
            </div>
        </div>

        <div v-if="page === 'lec5'" id="lec5">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h4>
                        Now we move to the calculation of birth time.
                    </h4>
                    <h3>
                       The time start at 06:00
                    </h3>
                    <h2>
                        Then the total time is
                        <br>
                        10:17 - 06:00.
                        <br>
                        <span>4:17</span>
                        <br>
                        And we have to change into minutes unit.
                        <br>
                        <span>257</span>
                        <br>
                        Plus with previous start-value
                        <br>
                        <span>277</span>
                    </h2>
                </div>
            </div>
            <div @click.stop="changePage('lec6')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'lec6'" id="lec6">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <img src="../assets/chart-month-time-july.png" alt="">
                    <h4>
                        From the previous value <span style="color: #35dabd;">277</span>, we have to minus it with each slot value counter-clockwise
                    </h4>
                    <h3>
                        <span style="color: #35dabd;">277</span> - 120 = <span style="color: #35da41;">157</span>
                    </h3>
                    <h3>
                        <span style="color: #35da41;">157</span> - 144 = 13
                    </h3>
                    <h2>
                        Until we found negative value,
                        The slot that produce negative value is a Lakkana slot.
                    </h2>
                </div>
            </div>
            <div @click.stop="changePage('ex3')">
                <footerBar name="NEXT"></footerBar>
            </div>
        </div>

        <div v-if="page === 'ex3'" id="ex3">
            <div class="wrapper">
                <div class="question">
                    <div class="container">
                        <img src="../assets/chart-month-time-july.png" alt="">
                        What is a Lakkana Slot ?
                        <br>
                        <i style="color: #AAA;">Minus until found negative value.</i>
                    </div>
                </div>
                <div class="answers-box">
                    <div @click.stop="changePage('lec7')" class="answer">At point 6</div>
                    <div @click="incorrectAnswer" class="answer">At point 7</div>
                    <div @click="incorrectAnswer" class="answer">At point 9</div>
                    <div @click="incorrectAnswer" class="answer">At point 11</div>
                </div>
            </div>
        </div>

        <div v-if="page === 'lec7'" id="lec7">
            <div class="wrapper">
                <div class="wrapper-lec">
                    <h2>
                        Finally, we found that slot 6 is a Lakkana.
                        Then, compare with following chart, you will know the Lakkana Zodiac.
                    </h2>
                    <img src="../assets/chart.png" alt="">
                    <div>
                        <h5 class="zodiac-title zodiac-text">
                            Lakkana Zodiac is
                        </h5>
                    </div>
                    <div>
                        <h1 class="zodiac-name zodiac-text">
                            -= Virgo =-
                        </h1>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <footerBar name="HOME"></footerBar>
            </router-link>
        </div>

    </div>
</template>

<script>
import FooterBar from '../components/FooterBar';
import LakkanaChart from '../components/LakkanaChart';

export default {
    data() {
        return {
            page: 'lec0',
        };
    },
    methods: {
        changePage(page) {
            this.$data.page = page;
        },
        incorrectAnswer() {
            alert('Oops, Incorrect answer. Let\'s try again !!');
        },
    },
    components: {
        footerBar: FooterBar,
        lakkanaChart: LakkanaChart,
    },
};
</script>

<style scoped>
    #lec0 .wrapper {
        color: #FFF;
        text-align: center;
    }
    .wrapper-lec {
        padding: 12vw 5vw 10vw 5vw;
    }
    #lec0 h2 {
        font-size: 2rem;
        margin-bottom: 10%;
    }
    #lec0 h3 {
        font-size: 1.5rem;
        margin-bottom: 10%;
    }
    #lec0 h3 span {
        font-size: 2.5rem;
        color: #bb89f9;
    }
    #lec0 h4 {
        font-size: 1rem;
        margin-bottom: 10%;
    }
</style>

<style scoped>
    #lec1 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec1 h2 {
        font-size: 1.2rem;
        margin-bottom: 3%;
    }
</style>


<style scoped>
    #ex1 .question {
        text-align: center;
    }
</style>

<style scoped>
    #lec2 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec2 h2 {
        font-size: 1.2rem;
        margin-bottom: 3%;
    }
</style>

<style scoped>
    #lec3 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec3 h2 {
        font-size: 1.5rem;
        margin-bottom: 2%;
    }
    #lec3 h2 span {
        font-size: 2.5rem;
        color: #bb89f9;
    }
    #lec3 h3 {
        font-size: 1.3rem;
        margin-bottom: 10%;
    }
    #lec3 h4 {
        font-size: 1.2rem;
    }
</style>

<style scoped>
    #lec4 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec4 h2 {
        font-size: 2rem;
        margin-bottom: 10%;
    }
    #lec4 h3 {
        font-size: 1.2rem;
        margin-bottom: 5%;
    }
    #lec4 h3 span {
        font-size: 2.5rem;
        color: #bb89f9;
    }
    #lec4 h4 {
        font-size: 1rem;
        margin-bottom: 5%;
    }
</style>

<style scoped>
    #lec5 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec5 h2 {
        font-size: 1.7rem;
        margin-bottom: 10%;
    }
    #lec5 h2 span {
        font-size: 3rem;
        color: #bb89f9;
    }
    #lec5 h3 {
        font-size: 1.2rem;
        margin-bottom: 5%;
    }
    
    #lec5 h4 {
        font-size: 1rem;
        margin-bottom: 5%;
    }
</style>

<style scoped>
    #lec6 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec6 h2 {
        font-size: 1.7rem;
        margin-bottom: 10%;
    }
    #lec6 h3 {
        font-size: 1.2rem;
        margin-bottom: 5%;
    }
    #lec6 h4 {
        font-size: 1rem;
        margin-bottom: 5%;
    }
</style>

<style scoped>
    #lec7 .wrapper {
        color: #FFF;
        text-align: center;
    }
    #lec7 h2 {
        font-size: 1.2rem;
        margin-bottom: 10%;
    }
</style>

<style scoped>
    .zodiac-name {
        margin-top: -2vh;
        font-size: 3.25rem;
        font-weight: bold;
        color: #bb89f9!important;
    }
    .zodiac-title {
        margin-top: 1vh;
        font-size: 1.5rem;
    }
    .zodiac-text {
        text-align: center;
        color: #bbb;
    }
</style>

<style scoped>
    .wrapper {
        background-color: #222;
        padding-bottom: 14vw;
    }
    .question {
        padding: 3rem 2rem;
        background-color: #433E90;
        color: #FFF;
        font-size: 4.3vmin;
        box-shadow: 0px 1px 5px #222;
    }
    .answer {
        background-color: #333;
        color: #CCC;
        margin: 1.5rem 1.5rem;
        padding: 1.2rem;
        text-align: center;
        box-shadow: 0px 1px 5px #222;
        border-radius: 0.7rem;
        cursor: pointer;
    }
</style>
