import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
// import NewPage from '../components/NewPage.vue'
// import NewPage2 from '../components/NewPage2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/new-page',
  //   name: 'NewPage',
  //   component: NewPage
  // },
  // {
  //   path: '/new-page2',
  //   name: 'NewPage2',
  //   component: NewPage2
  // },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;