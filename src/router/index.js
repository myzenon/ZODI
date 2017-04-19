import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Exercise from '@/components/Exercise';
import TransTable from '@/components/TransTable';

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
        {
            name: 'TransTable',
            path: '/table-chart',
            component: TransTable,
        },
    ],
});
