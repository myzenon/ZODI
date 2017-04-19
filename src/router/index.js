import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Exercise from '@/components/Exercise';
import TranstoTable from '@/components/TransToTable';

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
            name: 'TranstoTable',
            path: '/TranstoTable',
            component: TranstoTable,
        },
    ],
});
