<template>
  <f7-page>

    <f7-navbar>

      <f7-nav-left>
        <f7-link class="da"  tab-link="#tab-111" tab-link-active>
          <span>照片</span>
        </f7-link>
        <f7-link class="xiao" tab-link="#tab-112">
          <span>视屏</span>
        </f7-link>
      </f7-nav-left>

      <f7-nav-title>发现卡牌</f7-nav-title>
      <f7-nav-right>
        <f7-link class="rightIcon">
            筛选
            <img src="../../assets/images/arrow_down_label.png" alt="">
        </f7-link>
      </f7-nav-right>
    </f7-navbar>



     <div class="tabs tab-T">
      <f7-swiper class="swiperPic tab tab-active" id="tab-111">
        <f7-swiper-slide><img src="../../assets/figure/pic1.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic11.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic2.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic3.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic4.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic5.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic6.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic7.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic8.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic9.png" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="../../assets/figure/pic10.png" alt=""></f7-swiper-slide>
      </f7-swiper>

      <f7-tab id="tab-112" class=" tab">
        <h1>第二页</h1>
      </f7-tab>

    </div>

  </f7-page>
</template>
<script>
export default {}
</script>

<style scoped>

/* 图标  左*/
  .da span{
    /* font-size: 1.125rem;
    font-weight:bold;
    border-bottom: .25rem solid #000;
    padding-bottom: .125rem; */
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

/* 图标 右 */
.rightIcon{
  font-size: .875rem;
}

.rightIcon img{
  width: .9375rem;
  height: .625rem;
}

/* 滑动 */
.tab-T{
   width: 95%;
    height: 95%;
    margin: .9375rem auto 0;
}
.tab-T .swiperPic{
    /* width: 95%;
    height: 95%;
    margin: .9375rem auto 0; */
    width: 100%;
    height: 100%;
  }

.tab-T .swiperPic img{
    width: 100%;
    height: 100%;
  }

</style>
