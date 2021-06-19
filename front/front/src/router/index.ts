import * as vr from 'vue-router';
import login from '@/components/pages/login.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import senario from '@/components/pages/senario.vue'
import Upload from '@/components/pages/upload.vue';

const Home = { template: '<div>Home</div>' };

const routes: vr.RouteRecordRaw[] = [
  { path: '/', component: HelloWorld },
];

export const router = vr.createRouter({
  history: vr.createWebHistory(),
  routes,
});


