<template>
  <f7-page>

    <f7-navbar>
      <f7-nav-right>

        <f7-link class='rightIcon'>
          <img src="../../assets/images/icon_mine_button_edit.png" alt="">
        </f7-link>

        <f7-link class='rightIcon'>
          <img src="../../assets/images/icon_mine_button_setting.png" alt="">
        </f7-link>

      </f7-nav-right>

    </f7-navbar>

    <div class="main">
      <div class="portrait">
        <a href="" class="touxiang"></a>
        <h2>keke</h2>
        <p>我的签名是刘波送的！</p>
      </div>

      <div class="main_inner">

        <ul>

          <li>
            <a href="">
              <img src="../../assets/images/mine_barrage.png" alt="">
              <span>弹幕管理</span>
            </a>
            <a href="">
              <img src="../../assets/images/mine_like_me.png" alt="">
              <span>0,喜欢我</span>
            </a>
            <a href="">
              <img src="../../assets/images/mine_personinfo.png" alt="">
              <span>我的卡牌</span>
            </a>
          </li>

          <li>
            <a href="">
              <div class="titleTop" style="margin: 0 0 .625rem 0;">
                <h4>我的个性标签</h4>
              </div>
              <span>+</span>
              <span>我不是刘波</span>
              <span>我不需要标签</span>
              <span>旺~旺</span>
            </a>
          </li>

          <li>
            <a href="">
              <div class="titleTop">
                <h4>我的内容</h4>
                <a href="" class="more">
                  更多
                  <img src="../../assets/images/act_back_away.png" alt="">
                </a>
              </div>
              <div class="content">
                <a href=""></a>
              </div>
            </a>
          </li>

           <li>
            <a href="">
              <div class="titleTop">
                <h4>我赞过的</h4>
                <a href="" class="more">
                  更多
                  <img src="../../assets/images/act_back_away.png" alt="">
                </a>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div class="titleTop">
                <h4>喜欢的活动</h4>
                <a href="" class="more">
                  更多
                  <img src="../../assets/images/act_back_away.png" alt="">
                </a>
              </div>
            </a>
          </li>
        </ul>

      </div>

    </div>
    
  </f7-page>
</template>

<script>
export default {}
</script>

<style scoped>

/* 右图标 */
  .rightIcon img{
    width: 1.5625rem;
    height: 1.5625rem;
  }

/* main */

.main{
  width: 100%;
  height: 100%;
  padding-top: .9375rem;
  /* box-sizing: border-box; */
}

.main .portrait{
  width: 100%;
  text-align: center;
}

.main .portrait .touxiang{
  display: block;
  width: 5rem;
  height: 5rem;
  border: .3125rem solid #000;
  border-radius: 50%;
  margin: 0 auto;
  background: url('../../assets/images/icon_filter_raw.png') no-repeat;
  background-size: 100% 100%;
}

.main .portrait h2,p{
  margin-bottom: 0;
  margin-top: .625rem;
}

.main .portrait p{
  color: #cccccc;
}


.main .main_inner ul{
  list-style: none;
  padding: 0;
}

.main .main_inner ul li{
  padding: .625rem .9375rem;
  border-bottom: .0625rem solid #ccc;
}

.main .main_inner ul li a{
  display: block;
}

.main .main_inner ul li a .titleTop{
  overflow: hidden;
}

.main .main_inner ul li a .titleTop h4{
  font-weight: bold;
  display: block;
  float: left;
  margin: 0;
}
.main .main_inner ul li a .titleTop .more{
  display: block;
  float: right;
}

.main .main_inner ul li a .titleTop .more img{
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: middle;
}

.main .main_inner ul li:nth-child(1){
  display: flex;
  padding: .625rem 0;
}

.main .main_inner ul li:nth-child(1) a{
  flex: 1;
  text-align: center;
}

.main .main_inner ul li:nth-child(1) a img{
  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
}

.main .main_inner ul li:nth-child(1) a span{
  display: block;
}

.main .main_inner ul li:nth-child(1) a:nth-child(2){
  border-left: .0625rem solid #ccc;
  border-right: .0625rem solid #ccc;
}



.main .main_inner ul li:nth-child(2) a span{
  display: inline-block;
  height: 1.5625rem;
  padding: 0 .625rem;
  line-height: 1.5625rem;
  color: white;
  background: #000;
  border-radius: 1.25rem;
  margin-right: .625rem;
}

.main .main_inner ul li:nth-child(2) a span:nth-child(2){
  background: white;
  color: black;
  width: 1.875rem;
  height: 1.4375rem;
  border: .0625rem solid #000;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  vertical-align:middle;
}

.main .main_inner ul li:nth-child(3) .content a{
  display: inline-block;
  width: 6.25rem;
  height: 6.25rem;
  background: url('../../assets/images/post_add.png') no-repeat;
  background-size: 100% 100%; 
}

</style>
