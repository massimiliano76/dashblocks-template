import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import DashblocksShowcase from './views/DashblocksShowcase.vue';
import Typography from './views/typography.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'showcase',
          component: DashblocksShowcase
        },
        {
          path: '/typography',
          name: 'typography',
          component: Typography
        }
      ]
    }
  ]
});
