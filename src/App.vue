<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main View -->

    <f7-views tabs>

      <div class="toolbar tabbar-labels toolbar-bottom">
        <div class="toolbar-inner">

          <f7-link tab-link='#view-dialogue'>
            <img src="./assets/images/navigation_news_unselected.png" alt=""
            @click="viewRight"
            v-show="isShow"
            >

            <img src="./assets/images/navigation_news_selected.png" alt=""
            @click="viewRight"
            v-show="!isShow"
            style="display: none;"
            >
            <span class="tabbar-label">对话</span>
         
          </f7-link>

          <f7-link tab-link='#view-community'>
            <img src="./assets/images/navigation_community_unselected.png" alt=""
            @click="viewRight2"
            v-show="isShow2"
            >
            <img src="./assets/images/navigation_community_selected.png" alt=""
            @click="viewRight2"
            v-show="!isShow2"
            style="display: none;"
            >
            <span class="tabbar-label">社区</span>
          </f7-link>

          <f7-link tab-link="#view-home" tab-link-active>
            <img src="./assets/images/navigation_find_white_border.png" alt="">
            <span class="tabbar-label">首页</span>
          </f7-link>

          <f7-link tab-link="#view-resonance">
            <img src="./assets/images/navigation_soul_unselected.png" alt=""
            @click="viewRight3"
            v-show="isShow3"
            >
            <img src="./assets/images/navigation_soul_selected.png" alt=""
            @click="viewRight3"
            v-show="!isShow3"
            style="display: none;"
            >
            <span class="tabbar-label">共鸣</span>
          </f7-link>

          <f7-link tab-link="#view-me">
            <img src="./assets/images/navigation_mine_unselected.png" alt=""
            @click="viewRight4"
            v-show="isShow4"
            >
            <img src="./assets/images/navigation_mine_selected.png" alt=""
            @click="viewRight4"
            v-show="!isShow4"
            style="display: none;"
            >
            <span class="tabbar-label">我的</span>
          </f7-link>
        </div>
      </div>


      <f7-view tab tab-active id="view-home" url="/"></f7-view>
      <f7-view tab id="view-dialogue" url="/dialogue/"></f7-view>
      <f7-view tab id="view-community" url="/community/"></f7-view>
      <f7-view tab id="view-resonance" url="/resonance/"></f7-view>
      <f7-view tab id="view-me" url="/me/"></f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        // theme: 'auto', // Automatic theme detection
        theme: 'ios', // Automatic theme detection
        // App routes
        routes: routes,
      },
      isShow: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
    }
  },
  methods:{
      viewRight(){
        this.isShow = !this.isShow;
      },
      viewRight2(){
        this.isShow2 = !this.isShow2;
      },
      viewRight3(){
        this.isShow3 = !this.isShow3;
      },
      viewRight4(){
        this.isShow4 = !this.isShow4;
      },
    }
}
</script>

<style scoped>

  .toolbar-inner{
    background: white;
    border: 0;
  }

  .toolbar-inner a img{
    width: 1.5rem;
    height: 1.5rem;
  }

</style>>

