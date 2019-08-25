<template>
  <f7-page>

    <f7-navbar>

      <f7-nav-left>
        <f7-link class="leftIcon">
          <a href="" class="b_border"><span> 时间 </span></a>
        </f7-link>
        <f7-link class="leftIcon">
          <a href=""><span> 距离 </span></a>
        </f7-link>
      </f7-nav-left>

      <f7-nav-title class="navTitle">
        <a href="" class="duihua hei">
          <span>对话</span>
        </a>

        <a href="" class="pipei">
          <span>匹配</span>
        </a>
        
      </f7-nav-title>

      <f7-nav-right>
        <f7-link class="rightIcon">
          001
          <img src="../../assets/images/me.png" alt="">
        </f7-link>
      </f7-nav-right>

    </f7-navbar>

    <div class="main">
      <div class="xiaoxi">
        <div class="portrait">
          <a href=""></a>
        </div>
        <div class="messAge">
          <a href="">
            <span>刘波（官方客服）</span>
            <p>欢迎回来，仓库里的人类都堆满了，快去看...</p>
          </a>
        </div>
      </div>

      <img src="../../assets/images/bg_match_friend_empty.png" alt="">

      <a href="" class="look">去看看</a>


    </div>



  </f7-page>
</template>
<script>
export default {}
</script>

<style scoped>

/* 左 图标 */
  .leftIcon span{
    font-size: .875rem;
    font-weight: none;
    border: 0;
    padding-bottom: .125rem;
  }

  .leftIcon .b_border span{
    border-bottom: .25rem solid #000; 
  }

/* title */
  .navTitle a{
    display: inline-block;
    width: 3.125rem;
    height: 1.5625rem;
    text-align: center;
    line-height: 1.5625rem;
    border: .0625rem solid #000;
    font-weight: none;
  }

  .navTitle .duihua{
    border-top-left-radius: .3125rem;
    border-bottom-left-radius: .3125rem;
  }

  .navTitle .pipei{
    border-top-right-radius: .3125rem;
    border-bottom-right-radius: .3125rem;
  }

  .navTitle .hei{
    background: #000;
    color: white;
  }

/* 右图标 */
  .rightIcon img{
    width: 1.25rem;
    height: 1.25rem;
  }

  .rightIcon{
    font-size: .875rem;
    font-weight: bold;
  }

  /* 主体 */
  .main{
    width: 100%;
    height: 100%;
    padding-top: 1.25rem;
    box-sizing: border-box;
    position: relative;
  }
  .main .xiaoxi{
    overflow: hidden;
    padding-left: 1.25rem;
  }

  .main .xiaoxi .portrait{
    float: left;
  }

  .main .xiaoxi .portrait a{
    display: inline-block;
    width: 3.125rem;
    height: 3.125rem;
    background: url('../../assets/images/icon_filter_raw.png') no-repeat;
    background-size: 100% 100%;
  }

  .main .xiaoxi .messAge{
    width: 80%;
    float: left;
    margin-left: .625rem;
    padding-bottom: .3125rem;
    border-bottom: .0625rem solid #000;
  }

  .main .xiaoxi .messAge a{
    display: inline-block;
  }

  .main .xiaoxi .messAge a span{
    font-weight: bold;
  }

  .main .xiaoxi .messAge a p{
    text-overflow:ellipsis;
    margin: 0;
  }

  .main img{
    width: 10rem;
    height: 11.25rem;
    position: absolute;
    top: 9.375rem;
    left: 50%;
    margin-left: -5rem;
  }

  .main .look{
    display: block;
    width: 5rem;
    height: 1.5625rem;
    text-align: center;
    line-height: 1.5625rem;
    background: #000;
    color: white;
    border-radius: 1.25rem;

    position: absolute;
    left: 50%;
    margin-left: -2.5rem;
    bottom:12.5rem;
  }

  
</style>
