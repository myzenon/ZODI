<template>
    <div>
        <div v-if="page === 'table'" id="table">
            <div class="wrapper table-wrapper">
                <table class="table is-striped is-bordered" >
                    <thead>
                        <tr>
                            <th>Star</th>
                            <th>Zodiac</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="star in Object.keys(stars)">
                            <td v-html="stars[star].img"></td>
                            <td class="zodiacSelector">
                                <div class="select">
                                    <select class="zodiacChoice" v-model="zodiacSelection[star]">
                                        <option v-for="zodiac in Object.keys(zodiacChoice)" :value="zodiacChoice[zodiac]">{{ zodiac }}</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
            <div @click="transform">
                <footerBar name="Transform"></footerBar>
            </div>
        </div>
        <div v-if="page === 'result'" id="result">
            <div class="wrapper"> 
                <lakkanaChart :chartMap="zodiacSelection" chartType="1"></lakkanaChart>
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
            stars: {
                s1: {
                    name: 'Sun',
                },
                s2: {
                    name: 'Moon',
                },
                s3: {
                    name: 'Mar',
                },
                s4: {
                    name: 'Mercury',
                },
                s5: {
                    name: 'Jupiter',
                },
                s6: {
                    name: 'Venus',
                },
                s7: {
                    name: 'Saturn',
                },
                s8: {
                    name: 'Eclipse',
                },
                s9: {
                    name: 'Neptune',
                },
                s10: {
                    name: 'Uranus',
                },
                slak: {
                    name: 'Lakkana',
                },
            },
            zodiacSelection: {
                s1: -1,
                s2: -1,
                s3: -1,
                s4: -1,
                s5: -1,
                s6: -1,
                s7: -1,
                s8: -1,
                s9: -1,
                s10: -1,
                slak: -1,
            },
            zodiacChoice: {
                'No-Value': -1,
                Aries: 0,
                Taurus: 1,
                Gemini: 2,
                Cancer: 3,
                Leo: 4,
                Virgo: 5,
                Libra: 6,
                Scorpio: 7,
                Sagittarius: 8,
                Capricorn: 9,
                Aquarius: 10,
                Pisces: 11,
            },
            chartMap: {},
            page: 'table',
        };
    },
    created() {
        Object.keys(this.$data.stars).forEach((star) => {
            this.$data.stars[star].img = '<img class="star-img" src="' + require('../assets/' + star + '.png') + '"> = ' + this.$data.stars[star].name;
        });
    },
    mounted() {

    },
    methods: {
        transform() {
            window.scrollTo(0, 0);
            this.$data.page = 'result';
        },
    },
    components: {
        footerBar: FooterBar,
        lakkanaChart: LakkanaChart,
    },
};
</script>

<style scoped>
    .wrapper {
        background-color: #222;
    }
    .table-wrapper {
        margin-bottom: 14vmin;
    }
    th {
        text-align: center;
        vertical-align: middle;
        background-color :#444444;
        border-color : #555;
        color : #EEE!important; 
    }
    td {
        padding: 3vh;
    }
    .zodiacChoice {
        color : #888;
    }
    .zodiacSelector {
        text-align : center;
    }
    .select:after {
        z-index: 0;
    }
</style>
<style scoped></style>
