<template>
  <f7-page>

    <f7-navbar style="border:0;">
      <f7-nav-left>

        <f7-button fill popup-open=".demo-popup-l">
        <!-- <f7-link> -->
          <img class="select" src="../../assets/images/ic_soul_gender.png" alt="">
        <!-- </f7-link> -->
        </f7-button>

      </f7-nav-left>

      <f7-nav-title>灵魂共鸣</f7-nav-title>
      
      <f7-nav-right>
        <f7-button fill popup-open=".demo-popup-r">
        <!-- <f7-link > -->
          <img class="introduce" src="../../assets/images/soul_q_a.png" alt="">
        <!-- </f7-link> -->
        </f7-button>
      </f7-nav-right>
    </f7-navbar>

    <div class="main">

      <div class="main_inner">
        
        <!-- 星球 -->
        <div class="planet">
          <!-- 球 -->
          <div class="ball"></div>
          <!-- 光环 -->
          <div class="light"></div>
        </div>

        <!-- 手 -->
        <div class="hand"></div>
        <!-- <button class="matching" value="开始匹配">开始匹配</button> -->
        <f7-link class="matching">开始匹配</f7-link>
        <!-- <a href="#" class="matching">开始匹配</a> -->
        <p class="jimu">好看的皮囊千篇一律，有趣的灵魂在积目里</p>

      </div>

    </div>

   <!-- 遮罩层 -->
   <f7-popup class="demo-popup-l shade">
        <!-- 左弹框 -->
        <div class="chat">
            <span>你想找什么样的人聊天?</span>
            <div class="options">
              <f7-link>
                <img src="../../assets/images/ic_soul_male_normal.png" alt=""
                @click="viewRight"
                v-show="isShow"
                >
                <img class="select" src="../../assets/images/ic_soul_male_selected.png" alt=""
                @click="viewRight"
                v-show="!isShow"
                style="display: none;"
                >
                <span>男生</span>
              </f7-link>
      
              <f7-link>
                <img src="../../assets/images/ic_soul_female_normal.png" alt=""
                @click="viewRight2"
                v-show="isShow2"
                >

                <img src="../../assets/images/ic_soul_female_selected.png" alt=""
                @click="viewRight2"
                v-show="!isShow2"
                style="display: none;"
                >
                <span>女生</span>

              </f7-link>

              <f7-link>

                <img src="../../assets/images/ic_soul_all_normal.png" alt=""
                @click="viewRight3"
                v-show="isShow3"
                >

                <img src="../../assets/images/ic_soul_all_selected.png" alt=""
                @click="viewRight3"
                v-show="!isShow3"
                style="display: none;"
                >
                <span>都行</span> 
              </f7-link>
            </div>

            <div class="confirm">
              <f7-link popup-close>确定</f7-link>
            </div>
        </div>
      <!-- </div> -->
    </f7-popup>

    <f7-popup class="demo-popup-r shade">
      <div class="shade">
        <!-- 右弹窗 -->
        <div class="ask">
          <div class="askHeader">
            <img src="../../assets/images/guigui.png" alt="">
          </div>

          <div class="askInner">
            <p>
              <img src="../../assets/images/soul_dialog_ball.png" alt="">
              <span>
                系统会根据用户在目的筛选中选择的性别随机匹配一个在线的异性用户
                (如果选择“性别不限”则会随机匹配一个任意性别的在线用户)进行三分钟
                的灵魂沟通
              </span> 
            </p>
            <p>
              <img src="../../assets/images/soul_dialog_ball.png" alt="">
              <span>
                聊天过程中有任意一方退出，聊天结束。三分种倒计时结束后，聊天结束，
                如果聊得来记得点下“喜欢”
              </span> 
            </p>
            <p>
              <img src="../../assets/images/soul_dialog_ball.png" alt="">
              <span>
                和谐社会请文明聊天，不文明的行为一经查实会被禁止使用此功能
              </span> 
            </p>
          </div>

          <div class="confirm">
            <f7-link popup-close>确定</f7-link>
          </div>
        </div>
      </div>
    </f7-popup>


  </f7-page>
</template>



<script>
  export default {
    data(){
      return {
        isShow: true,
        isShow2: true,
        isShow3: true,
      };
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
    }
  }


</script>

<style scoped>

.navbar .left .button ,.navbar .right .button{
  background: none;
}

  /* 左右图标 */
  .navbar .left img,
  .navbar .right img{
    width: 1.25rem;
    height: 1.25rem;
  }

  /* main */
  .page-content .main{
    width: 100%;
    height: 100%;
    background:url('../../assets/images/img_5.png') no-repeat;
    background-size: 100% 100%;
    z-index: 1;

    /* position: fixed; */
  }

  /* main_inner */
  .page-content .main .main_inner{
    width: 100%;
    height: 100%;
    background:url('../../assets/images/img_3.png') no-repeat;
    background-size: 100% 100%;
    z-index: 2;

    position: fixed;
  }

  /* 手 */
  .page-content .main .main_inner .hand{
    width: 7.5rem;
    height: 14.375rem;
    background:url('../../assets/images/img_4.png') no-repeat;
    /* background-position: 0 220px; */
    background-size: cover ;
    z-index: 3;

    position: absolute;
    bottom: 11.25rem;
    left: 50%;
    margin-left: -3.75rem;
  }

  /* 匹配 */
  .page-content .main .main_inner .matching{
    display: inline-block;
    width: 7.5rem;
    height: 1.875rem;
    background: black;
    color: white;
    text-align: center;
    line-height: 1.875rem;
    border-radius: 1.25rem;
    border: 0px;

    position: absolute;
    bottom: 9.375rem;
    left: 50%;
    margin-left: -3.75rem;
  }

  /* p */
  .page-content .main .main_inner .jimu{
    width: 18.75rem;
    font-size: .875rem;
    position: absolute;
    bottom: 6rem;
    left: 50%;
    margin-left: -8.5rem;
    color: #929292;
  }

  /* 星球 */
  .page-content .main .main_inner .planet{
    width: 15rem;
    height: 10rem;
  
    position: absolute;
    left: 50%;
    margin-left: -8rem;
    top: 5rem;
  }

  /* 球 */
  .page-content .main .main_inner .planet .ball{
    width: 7.5rem;
    height: 7.5rem;
    background: url('../../assets/images/img_1.png') no-repeat;
    background-size: 100% 100%;

    position: absolute;
    left: 50%;
    margin-left: -4.68rem;
  }

  /* 光 */
  .page-content .main .main_inner .planet .light{
    width: 15rem;
    height: 5rem;
    background: url('../../assets/images/img_0.png') no-repeat;
    background-size: 100% 100%;

    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -8rem;
  }

  /* 遮罩 */
  .shade{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
  }

  /* 弹框 */ 
  .shade .chat{
      width: 13.75rem;
      height: 15.625rem;
      background: white;
      border-radius: 1.25rem;
      text-align: center;
      z-index: 10;
      position: absolute;
      left: 50%;
      margin-left: -6.875rem;
      top: 9.375rem;
  }

  .shade .chat>span{
     display: inline-block;
     margin-top: 1.25rem;
     font-weight: bold;
   }

  .shade .chat .options{
     display: flex;
     margin-top: 3.125rem;
   }

  .shade .chat .options a{
     display: block;
     flex: 1;
   }
  .shade .chat .options img{
     width: 3.125rem;
     height: 3.125rem;
     display: block;
     margin: 0 auto;
   }

  .shade .chat .options span{
     display: inline-block;
     margin: .625rem auto 0;
   }

  .shade .chat .confirm{
     width: 100%;
     height: 2.5rem;
     position: absolute;
     bottom: 0;
     border-top: .0625rem solid #cccccc;
     line-height: 2.5rem;
   }

  .shade .chat .confirm a{
     color: black;
     font-weight: bold;
     font-size: 1rem;
   }



  .shade .ask{
      width: 18.75rem;
      height: 25rem;
      background: white;
      border-radius: 1.25rem;
      text-align: center;
      z-index: 5;
      position: absolute;
      left: 50%;
      margin-left: -9.375rem;
      top: 7.5rem;
      /* display: none; */
  }

  .shade .ask .confirm{
     width: 100%;
     height: 2.5rem;
     position: absolute;
     bottom: 0;
     border-top: .0625rem solid #cccccc;
     line-height: 2.5rem;
   }

  .shade .ask .confirm a{
     color: black;
     font-weight: bold;
     font-size: 1rem;
   }


  .shade .ask .askHeader{
    width: 100%;
    height: 6.25rem;
    background: url('../../assets/images/soul_dialog_bg_header.png') no-repeat;
    background-size: 100% 100%;
    border-top-left-radius:1.25rem; 
    border-top-right-radius:1.25rem; 
    text-align: left;
  }

  .shade .ask .askHeader img{
    width: 4.375rem;
    height:5rem;
    position: absolute;
    left: -.625rem;
    top: -.625rem;
  }

  .shade .ask .askInner{
    width: 15.625rem;
    margin: 0 auto;
    text-align: left;
  }

  .shade .ask .askInner img{
    vertical-align: middle;
    float: left;
    width: 1.5625rem;
    height: .875rem;
    margin-right: .4375rem;
  }

  .shade .ask .askInner p{
    margin-bottom: 1.25rem;
    overflow: hidden;
  }

  .shade .ask .askInner p span{
    width: 13.625rem;
    display: inline-block;
    font-size: .78125rem;
    float: left;
  }


</style>
