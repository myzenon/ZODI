import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Exercise from '@/pages/Exercise';

import TransTable from '@/pages/TransTable';
import TransTableResult from '@/pages/TransTable-Result';

import Create from '@/pages/Create';
import CreateResult from '@/pages/Create-Result';

import TranstoTable from '@/pages/TransToTable';
import TableFromLukkana from '@/pages/TransToTable-Result';

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
            name: 'table-chart',
            path: '/table-chart',
            component: TransTable,
        },
        {
            name: 'tableResult',
            path: '/Table-Result',
            component: TransTableResult,
        },
        {
            name: 'create',
            path: '/create',
            component: Create,
        },
        {
            name: 'createResult',
            path: '/createResult',
            component: CreateResult,
        },
        {
            name: 'chart-table',
            path: '/chart-table',
            component: TranstoTable,
        },
        {
            name: 'TableFromLukkana',
            path: '/TransToTable-Result',
            component: TableFromLukkana,
        },
    ],
});
