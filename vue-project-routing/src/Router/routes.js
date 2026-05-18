import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home/HomePage.vue';
import Contact from '@/components/Home/Contact.vue';
import ProductList from '@/components/Product/ProductList.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import NotFound from '@/components/Layout/NotFound.vue';
import Login from '@/components/Authentication/Login.vue';

const isAdmin = () => {
  const isAdmin = false;
  if (!isAdmin) {
    return false;
  }

  return true;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Contact,
      beforeEnter: [isAdmin],
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
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
});

// router.beforeEach((to, from) => {
//   console.log('Global Before Each');
//   const isAuthenticated = true;
//   if (!isAuthenticated && to.name !== 'login') {
//     return { name: 'login' };
//   }

//   return true;
// });

export default router;
