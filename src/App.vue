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
          <!-- <a href="#view-dialogue" class="tab-link"> -->
           <img src="./assets/images/navigation_news_unselected.png" alt="">
            <span class="tabbar-label">对话</span>
          <!-- </a> -->
          </f7-link>

          <f7-link tab-link='#view-community'>
          <!-- <a href="#view-community" class="tab-link"> -->
            <img src="./assets/images/navigation_community_unselected.png" alt="">
            <span class="tabbar-label">社区</span>
          <!-- </a> -->
          </f7-link>

          <f7-link tab-link="#view-home" tab-link-active>
          <!-- <a href="#view-home" class="tab-link tab-link-active"> -->
            <img class="homeimg" src="./assets/images/navigation_find_white_border.png" alt="">
            <span class="tabbar-label">首页</span>
          <!-- </a> -->
          </f7-link>

          <f7-link tab-link="#view-resonance">
          <!-- <a href="#view-resonance" class="tab-link"> -->
            <img src="./assets/images/navigation_soul_unselected.png" alt="">
            <span class="tabbar-label">共鸣</span>
          <!-- </a> -->
          </f7-link>

          <f7-link tab-link="#view-me">
          <!-- <a href="#view-me" class="tab-link"> -->
            <img src="./assets/images/navigation_mine_unselected.png" alt="">
            <span class="tabbar-label">我的</span>
          <!-- </a> -->
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
    }
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

