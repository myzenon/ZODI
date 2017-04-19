import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Exercise from '@/components/Exercise';
import TransTable from '@/components/TransTable';
import TransTableResult from '@/components/TransTable-Result';

import Create from '@/components/Create';
import CreateResult from '@/components/Create-Result';
import LakkanaChart from '@/components/LakkanaChart';


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
    ],
});
