import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

await router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if(to.path !== '/' && !userStore.isLoggedIn)
    next();
  else
    next();
})

export default router
