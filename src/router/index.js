import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import NewPage from '../components/NewPage.vue';
import NewPage2 from '../components/NewPage2.vue';

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
    path: '/new-page2',
    name: 'NewPage2',
    component: NewPage2,
    meta: {
      title: 'NewPage2'
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