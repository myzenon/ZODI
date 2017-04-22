import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index';
import Create from '@/pages/Create';
import ChartTable from '@/pages/ChartTable';
import TableChart from '@/pages/TableChart';
import Exercise from '@/pages/Exercise';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index,
        },
        {
            name: 'create',
            path: '/create',
            component: Create,
        },
        {
            name: 'chart-table',
            path: '/chart-table',
            component: ChartTable,
        },
        {
            name: 'exercise',
            path: '/exercise',
            component: Exercise,
        },
        {
            name: 'table-chart',
            path: '/table-chart',
            component: TableChart,
        },
    ],
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;
