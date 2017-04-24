<template>
    <div>
        <div v-if="page === 'create'" id="create">
            <div class="wrapper">
                <section id="section1" class="hero is-primary section1">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Create a Lakkana Chart
                            </h1>
                        </div>
                    </div>
                </section>
                <div class="containerCreate">
                    <div class="field">
                        <label class="label">Select from Profiles</label>
                        <p class="control">
                            <span class="select">
                                <select v-model="selectedProfile" @change="selectProfile">
                                    <option :value="null" selected>No</option>
                                    <option v-for="profile in profiles" :value="profile">{{ getProfileName(profile) }}</option>
                                </select>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Date of Birth</label>
                        <p class="control">
                            <input class="input" type="date" v-model="profile.date" :disabled="selectedProfile">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Time of Birth</label>
                        <p class="control">
                            <input class="input" type="time" v-model="profile.time" :disabled="selectedProfile">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Hometown</label>
                        <p class="control">
                            <span class="select">
                                <select v-model="profile.country" :disabled="selectedProfile">
                                    <option v-for="country in countries" :selected="country === 'Thailand'">{{country}}</option>
                                </select>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div @click="create">
                <footerBar name="CREATE"></footerBar>
            </div>
        </div>
        <div v-if="page === 'loading'" id="loading">
            <div class="wrapper">
                <div class="loading-wrapper">
                    <img class="loading-img" src="../assets/loading.svg" alt="">
                    <div>Loading ...</div>
                </div>
            </div>
        </div>
        <div v-if="page === 'result'" id="result">
            <div class="wrapper wrapper-result"> 
                <lakkanaChart :chartMap="chartMap" chartType="1"></lakkanaChart>
                <div>
                    <h5 class="zodiac-title zodiac-text">
                        Your Lakkana Zodiac is
                    </h5>
                </div>
                <div>
                    <h1 class="zodiac-name zodiac-text">
                        -= {{ lakkanaZodiac }} =-
                    </h1>
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
import countries from '../data/countries_name.json';

const twoDigits = number => ('0' + number).slice(-2);

export default {
    data() {
        return {
            selectedProfile: null,
            profile: {
                date: '',
                time: '',
                country: 'Thailand',
            },
            countries,
            profiles: [],
            page: 'create',
            chartMap: null,
            lakkanaZodiac: null,
        };
    },
    mounted() {
        if (this.$localStorage.get('profiles') === null) {
            this.$localStorage.set('profiles', JSON.stringify([]));
        }
        this.$data.profiles = JSON.parse(this.$localStorage.get('profiles')).reverse();
    },
    methods: {
        getProfile() {
            const date = new Date(this.$data.profile.date);
            const time = this.$data.profile.time.split(':');
            return {
                day: twoDigits(date.getDate()),
                month: twoDigits(date.getMonth() + 1),
                year: date.getFullYear(),
                hour: twoDigits(time[0]),
                minute: twoDigits(time[1]),
                country: this.$data.profile.country,
            };
        },
        createNewProfile() {
            const newProfile = this.getProfile();
            this.$data.profiles.push(newProfile);
            this.$localStorage.set('profiles', JSON.stringify(this.$data.profiles));
        },
        create() {
            if (this.$data.profile.birth === '') {
                alert('Please input your date/time of birth');
            }
            else {
                if (!this.$data.selectedProfile) {
                    this.createNewProfile();
                }
                this.$data.page = 'loading';
                this.$http.post('http://139.59.243.217:7000/chart', this.getProfile()).then((response) => {
                    if (response.body.slak !== -1) {
                        this.$data.chartMap = response.body;
                        this.$data.page = 'result';
                        window.scrollTo(0, 0);
                        const zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
                        this.$data.lakkanaZodiac = zodiac[this.$data.chartMap.slak];
                    }
                    else {
                        alert('Cannot find your Lakkana Chart');
                        window.scrollTo(0, 0);
                        this.$router.push({ name: 'index' });
                    }
                }, () => {
                    alert('Cannot connect to the server');
                    window.scrollTo(0, 0);
                    this.$router.push({ name: 'index' });
                });
                this.resetForm();
            }
        },
        resetForm() {
            this.$data.selectedProfile = null;
            this.$data.profile = {
                birth: '',
                country: 'Thailand',
            };
        },
        selectProfile() {
            const selectedProfile = this.$data.selectedProfile;
            if (selectedProfile) {
                this.$data.profile = {
                    date: selectedProfile.year + '-' + selectedProfile.month + '-' + selectedProfile.day,
                    time: selectedProfile.hour + ':' + selectedProfile.minute,
                    country: selectedProfile.country,
                };
            }
        },
        getProfileName(profile) {
            const date = new Date(
                profile.year,
                profile.month - 1,
                profile.day,
            );
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return (
                days[date.getDay()]
                + ' '
                + profile.day
                + ' '
                + months[profile.month - 1]
                + ' '
                + profile.year
                + ' | '
                + profile.hour
                + ':'
                + profile.minute
            );
        },
    },
    components: {
        footerBar: FooterBar,
        lakkanaChart: LakkanaChart,
    },
};
</script>

<style scoped>
    .containerCreate {
        padding: 12vw 10vw 30vw 10vw;
    }
    .label {
        color: #BBB;
        font-size: 1rem;
    }
    .center-core {
        text-align: center;
    }
    select, .select {
        width: 100%;
    }
    select:disabled {
        background-color: #222;
    }
    input:disabled {
        background-color: #222;
    }
    .wrapper {
        background-color: #222;
    }
    .section1 {
        background-image: url('../assets/sec1.jpg');
        background-size: cover;
        background-position: center right;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
    }
    .section1 .hero-body {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        text-align: center;
    }
</style>
<style scoped>
    .loading-wrapper {
        padding-top: 15vh;
        text-align: center;
        color: #FFF;
        font-size: 2rem;
        font-weight: bold;
    }
    .loading-img {
        width: 30%;
        margin-bottom: 2vh;
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
        font-size: 1.5rem;
    }
    .zodiac-text {
        text-align: center;
        color: #bbb;
    }
    .lakkana-chart {
        margin-bottom: 1vh;
    }
    .wrapper-result {
        margin-bottom: 14vmin;
    }
</style>
