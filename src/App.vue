<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main View -->

    <f7-views tabs>

      <div class="toolbar tabbar-labels toolbar-bottom">
        <div class="toolbar-inner">
          
          <a href="#view-dialogue" class="tab-link">
           <img src="./assets/images/navigation_news_unselected.png" alt="">
            <!-- <i class="icon f7-icons ios-only">list</i> -->
            <!-- <i class="icon f7-icons ios-only icon-ios-fill">list_fill</i>
            <i class="icon material-icons md-only">view_list</i> -->
            <span class="tabbar-label">对话</span>
          </a>
          <a href="#view-community" class="tab-link">
            <img src="./assets/images/navigation_community_unselected.png" alt="">
            <!-- <i class="icon f7-icons ios-only">settings</i> -->
            <!-- <i class="icon f7-icons ios-only icon-ios-fill">settings_fill</i>
            <i class="icon material-icons md-only">settings</i> -->
            <span class="tabbar-label">社区</span>
          </a>
          <a href="#view-home" class="tab-link tab-link-active">
            <img class="homeimg" src="./assets/images/navigation_find_white_border.png" alt="">
            <!-- <i class="icon f7-icons ios-only">home</i> -->
            <!-- <i class="icon f7-icons ios-only icon-ios-fill">home_fill</i> -->
            <!-- <i class="icon material-icons md-only">home</i> -->
            <span class="tabbar-label">首页</span>
          </a>
          <a href="#view-resonance" class="tab-link">
            <img src="./assets/images/navigation_soul_unselected.png" alt="">
            <!-- <i class="icon f7-icons ios-only">settings</i> -->
            <!-- <i class="icon f7-icons ios-only icon-ios-fill">settings_fill</i>
            <i class="icon material-icons md-only">settings</i> -->
            <span class="tabbar-label">共鸣</span>
          </a>
          <a href="#view-me" class="tab-link">
            <img src="./assets/images/navigation_mine_unselected.png" alt="">
            <!-- <i class="icon f7-icons ios-only">settings</i> -->
            <!-- <i class="icon f7-icons ios-only icon-ios-fill">settings_fill</i>
            <i class="icon material-icons md-only">settings</i> -->
            <span class="tabbar-label">我的</span>
          </a>
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
        theme: 'auto', // Automatic theme detection
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

