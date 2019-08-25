import HomeIndexPage from './views/home/index.vue';
import DialogueIndexPage from './views/dialogue/index.vue';
import CommunityIndexPage from './views/community/index.vue';
import ResonanceIndexPage from './views/resonance/index.vue';
import MeIndexPage from './views/me/index.vue';


import NotFoundPage from './pages/not-found.vue';

export default [
  // 主页 发现
  {
    path: '/',
    component: HomeIndexPage,
  },
  // 对话
  {
    path: '/dialogue/',
    component: DialogueIndexPage,
  },
  // 社区
  {
    path: '/community/',
    component: CommunityIndexPage,
  },
  // 共鸣
  {
    path: '/resonance/',
    component: ResonanceIndexPage,
  },
  // 我的
  {
    path: '/me/',
    component: MeIndexPage,
  },
  
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
