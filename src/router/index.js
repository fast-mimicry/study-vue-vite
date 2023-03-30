import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NewPage from '../views/NewPage.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home' // Homeページのタイトル
    },
  },
  {
    path: '/new-page',
    name: 'NewPage',
    component: NewPage,
    meta: {
      title: 'NewPage'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    },
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

//ナビゲーション実行前にタイトルを上書きします
router.beforeEach((to, from, next) => {
  document.title = to.meta.title // ルーターのメタ情報からタイトルを設定
  next()
})

export default router;