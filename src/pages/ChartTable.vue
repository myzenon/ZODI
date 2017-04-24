<template>
    <div>
        <div v-if="page === 'chart'" id="chart">
            <div class="wrapper">
                <lakkanaChart :chartMap="zodiacSelection" chartType="2"></lakkanaChart>
                <div class="table-wrapper">
                    <table class="table is-striped is-bordered" >
                        <thead>
                            <tr>
                                <th>Star</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="star in Object.keys(stars)">
                                <td v-html="stars[star].img"></td>
                                <td class="zodiacSelector">
                                    <div class="select">
                                        <select @change="selectChange" class="zodiacChoice" v-model="zodiacSelection[star]">
                                            <option value="-1">No-Value</option>
                                            <option value="0">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                            <option value="4">5</option>
                                            <option value="5">6</option>
                                            <option value="6">7</option>
                                            <option value="7">8</option>
                                            <option value="8">9</option>
                                            <option value="9">10</option>
                                            <option value="10">11</option>
                                            <option value="11">12</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div @click="transform">
                <footerBar name="Transform"></footerBar>
            </div>
        </div>
        <div v-if="page === 'result'" id="result">
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
                            <td class="zodiacText">
                                {{ zodiac[zodiacSelection[star]] }}
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
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
            zodiac: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
            chartMap: {},
            page: 'chart',
        };
    },
    created() {
        Object.keys(this.$data.stars).forEach((star) => {
            this.$data.stars[star].img = '<img class="star-img" src="' + require('../assets/' + star + '.png') + '"> = ' + this.$data.stars[star].name;
        });
    },
    methods: {
        selectChange() {
            window.scrollTo(0, 0);
        },
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
    .zodiacText {
        text-align: center;
        vertical-align: middle;
    }
</style>
<style scoped></style>
