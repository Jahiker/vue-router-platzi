import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/home', '/inicio'],
      meta: {
        requiresAuth: false
      }
    },
    // {
    //   path: '/home',
    //   redirect: {
    //     name: 'home'
    //   }
    // },
    {
      path: '/session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/chats',
      component: () => import('../views/ChatsView.vue'),
      meta: {
        requiresAuth: true,
        roles: ['admin']
      },
      children: [
        {
          path: ':chatId',
          component: () => import('../views/ChatView.vue'),
          // props: true
          // props: {
          //   chatId: '1'
          // }
          props: (route) => {
            return {
              chatId: route.params.chatId
            }
          }
        },
      ]
    }
  ],
});

router.beforeEach((to, from) => {
  console.log(to, from);

  // if (to.meta?.requiresAuth && to.meta.roles.includes('admin')) {
  //   console.log('Requires Auth', to.path)
  //   return '/session'
  // }

  // if(to.path === '/') return { name: 'about' }

  return true;
})

export default router;
