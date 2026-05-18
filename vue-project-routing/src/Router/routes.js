import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home/HomePage.vue';
import Contact from '@/components/Home/Contact.vue';
import ProductList from '@/components/Product/ProductList.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import NotFound from '@/components/Layout/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/contact',
      redirect: { name: 'contact' },
    },
    {
      path: '/product-list',
      component: ProductList,
    },
    {
      path: '/product/:id/:categoryId?',
      name: 'product-detail',
      component: ProductDetail,
      props: true,
    },
    {
      path: '/product',
      component: ProductDetail,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
});

export default router;
