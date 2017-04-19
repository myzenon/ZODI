import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Exercise from '@/components/Exercise';
import TranstoTable from '@/components/TransToTable';
import TableFromLukkana from '@/components/TablefromLukkana';

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
            name: 'chart-table',
            path: '/TranstoTable',
            component: TranstoTable,
        },
        {
            name: 'TableFromLukkana',
            path: '/TableFromLukkana',
            component: TableFromLukkana,
        },
    ],
});
