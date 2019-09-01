<template>
  <f7-page :page-content="true"
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >

     <f7-navbar>
      <f7-nav-left>
        <!-- <f7-link class="leftIcon">
          <a href="" class="da"><span> 全部 </span></a>
        </f7-link>
        <f7-link class="leftIcon">
          <a href="" class="xiao"> <span>同城</span> </a>
        </f7-link>
        <f7-link class="leftIcon">
          <a href="" class="xiao"> <span>好友</span> </a>
        </f7-link> -->
        <f7-link class="da" tab-link="#tab-11" tab-link-active>
          <span> 全部 </span>
        </f7-link>
        <f7-link class="xiao" tab-link="#tab-12">
          <span style="color:#000;">同城</span>
        </f7-link>
        <f7-link class="xiao" tab-link="#tab-13">
         <span style="color:#000;">好友</span>
        </f7-link>
      </f7-nav-left>

      <f7-nav-right>
        <f7-link class="rightIcon">
          <img src="../../assets/images/post_add.png" alt="">
        </f7-link>
        <f7-link class="rightIcon">
          <img src="../../assets/images/bell.png" alt="">
        </f7-link>
      </f7-nav-right>

    </f7-navbar>

    

    <div class="tabs">

      <f7-tab id="tab-11" class="tabs" tab-active>

        <div class="toolbar tabbar tabbar-scrollable toolbar-bottom switch">
          <div class="toolbar-inner">
            <a href="#tab-1" class="tab-link tab-link-active"> <span> ∑ </span> 推荐</a>
            <a href="#tab-2" class="tab-link"><span> ∑ </span> 男孩</a>
            <a href="#tab-3" class="tab-link"><span> ∑ </span> 女孩</a>
            <a href="#tab-4" class="tab-link"><span> ∑ </span> 晒物</a>
            <a href="#tab-5" class="tab-link"><span> ∑ </span> 打卡</a>
            <a href="#tab-6" class="tab-link"><span> ∑ </span> 活动</a>
          </div>
        </div>


        <div id="tab-1" class="page-content tab tab-active"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab-2" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab-3" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab-4" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab-5" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab-6" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

      </f7-tab>

      <f7-tab id="tab-12" class="tabs">

        <div class="toolbar tabbar tabbar-scrollable toolbar-bottom switch">
          <div class="toolbar-inner">
            <a href="#tab_1" class="tab-link tab-link-active"> <span> ∑ </span> 推荐</a>
            <a href="#tab_2" class="tab-link"><span> ∑ </span> 男孩</a>
            <a href="#tab_3" class="tab-link"><span> ∑ </span> 女孩</a>
            <a href="#tab_4" class="tab-link"><span> ∑ </span> 晒物</a>
            <a href="#tab_5" class="tab-link"><span> ∑ </span> 打卡</a>
            <a href="#tab_6" class="tab-link"><span> ∑ </span> 活动</a>
          </div>
        </div>

        <div id="tab_1" class="page-content tab tab-active"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab_2" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab_3" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT7_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT8_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT9_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT10_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/TT2_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/TT12_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/TT1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab_4" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab_5" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>

        <div id="tab_6" class="page-content tab"> 
          <f7-list class="tab_inner">
            <!-- :title="`Item ${item}`" -->
            <f7-list-item class="in_content" v-for="(item, index) in items" :key="index"> 

              <div class="group">

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T1_pic.png" alt=""> 
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T4_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T3_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T5_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T2_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T6_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T7_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T8_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T9_pic.png" alt="">
                  </f7-link>
                </div>

                <div class="conRight">
                  <f7-link>
                    <img src="../../assets/portrait/T10_pic.png" alt="">
                  </f7-link>
                </div>
                <div class="conLeft">
                  <f7-link>
                    <img src="../../assets/portrait/T11_pic.png" alt="">
                  </f7-link>
                  <f7-link>
                    <img src="../../assets/portrait/T12_pic.png" alt="">
                  </f7-link>
                </div>
              
              </div>
            </f7-list-item>

          </f7-list>
        </div>
 
      </f7-tab>

      <f7-tab id="tab-13" class="tab-13">
        <img src="../../assets/images/bg_match_friend_empty.png" alt="">
      </f7-tab>

    </div>

  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        items: [1],
        allowInfinite: true,
        showPreloader: true,
      };
    },
    methods: {
      loadMore() {
        const self = this;
        if (!self.allowInfinite) return;
        self.allowInfinite = false;

        setTimeout(() => {
          if (self.items.length >= 5000) {
            self.showPreloader = false;
            return;
          }

          const itemsLength = self.items.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items.push(itemsLength + i);
          }

          self.allowInfinite = true;
        }, 1000);
      },
    },
  };
</script>

<style scoped>

  /* 图标  左*/
  .da span{
    display: inline-block;
    height: 2rem;
    font-size: 1.125rem;
    font-weight:bold;
    border-bottom: .25rem solid #000;
    padding-bottom: .125rem;
    margin-top: -.625rem;
  }

  .xiao span{
    font-size: .875rem;
    font-weight: none;
    border-bottom: 0;
  }

  .rightIcon{
    margin-top: .625rem;
  }

  /* 图标 右 */
  .rightIcon img{
    width: 1.5625rem;
    height: 1.5625rem;
  }

  /* tab 切换 */
  .switch {
    position: absolute;
    top: 2.75rem;
  }
  .switch .toolbar-inner{
    background: white;
  }

  /* tab 标签 */
  .switch .toolbar-inner .tab-link{
    display: inline-block;
    font-size: .875rem;
    height: 1.5625rem;
    line-height: 1.5625rem;
    padding: 0 1.25rem;
    color: white;
    background: #000;
    border-radius: .625rem;
    margin-right: 1.25rem;
  }

  .switch .toolbar-inner .tab-link span{
    font-weight: bold;
  }

  .tab-link:nth-child(2) span{
    color: yellow;
  }
  .tab-link:nth-child(3) span{
    color: red;
  }
  .tab-link:nth-child(4) span{
    color: gray;
  }
  .tab-link:nth-child(5) span{
    color: greenyellow;
  }
  .tab-link:nth-child(6) span{
    color: blue;
  }

  .tabs .tab_inner .in_content .item-content{
    padding-left: 0px;
    width: 100%;
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group{
    width: 100%;
    overflow: hidden;
  }
  
  .tabs .tab_inner .in_content .item-content .item-inner .group .conLeft{
    float: left;
    width: 35%;
    height: 15.625rem;
    display: block;
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group .conLeft a{
    display: block;
    width: 100%;
    height: 50%;
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group .conLeft a img{
    width: 100%;
    height: 100%
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group .conRight{
    float: left;
    width: 65%;
    height: 15.625rem;
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group .conRight a{
    display: block;
    width: 100%;
    height: 100%;
  }

  .tabs .tab_inner .in_content .item-content .item-inner .group .conRight a img{
    width: 100%;
    height: 100%;
  }


  .tab-13 img{
    width: 10rem;
    height: 11.25rem;
    position: absolute;
    top: 12.5rem;
    left: 50%;
    margin-left: -5rem;
  }
  
</style>