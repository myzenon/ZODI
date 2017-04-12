import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index.vue';
import Exercise from '@/components/Exercise';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index,
        },
        {
            name: 'exercise',
            path: '/exercise',
            component: Exercise,
        },
    ],
});
