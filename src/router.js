import { createRouter, createWebHashHistory } from 'vue-router';

import PajaroDetails from './pages/PajaroDetail';


const routes = [
  {
    name: 'pajaros_details',
    path: '/pajaros-details',
    component: PajaroDetails,
    props: true,
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;