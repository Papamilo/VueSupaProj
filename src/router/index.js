import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Girl1 from '@/components/Girl1';
import Girl2 from '@/components/Girl2';
import Video1 from '@/components/Video1';
import DataTable from '@/components/DataTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/girl1',
      name: 'Girl1',
      component: Girl1
    },
    {
      path: '/girl2',
      name: 'Girl2',
      component: Girl2
    },
    {
      path: '/video1',
      name: 'Video1',
      component: Video1
    }
  ]
});
