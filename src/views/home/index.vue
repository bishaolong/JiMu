<template>
  <f7-page>

    <f7-navbar>

      <f7-nav-left>
        <f7-link class="leftIcon">
          <a href="" class="da"><span> 照片 </span></a>
          <!-- <a href="" class="xiao"> <span>视屏</span> </a> -->
        </f7-link>
        <f7-link class="leftIcon">
          <!-- <a href="" class="da"><span> 照片 </span></a> -->
          <a href="" class="xiao"> <span>视屏</span> </a>
        </f7-link>
      </f7-nav-left>

      <f7-nav-title>发现卡牌</f7-nav-title>
      <f7-nav-right>
        <f7-link class="rightIcon">
          <a href="">
            筛选
            <img src="../../assets/images/arrow_down_label.png" alt="">
          </a>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-swiper class="swiperPic">
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
  </f7-page>
</template>
<script>
export default {}
</script>

<style scoped>

/* 图标  左*/
  .leftIcon .da span{
    font-size: 1.125rem;
    font-weight:bold;
    border-bottom: .25rem solid #000;
    padding-bottom: .125rem;
  }

   .leftIcon .xiao span{
     font-size: .875rem;
     font-weight: none;
     border-bottom: 0;
   }

/* 图标 右 */
.rightIcon a{
  font-size: .875rem;
}

.rightIcon a img{
  width: .9375rem;
  height: .625rem;
}

/* 滑动 */
  .swiperPic{
    width: 95%;
    height: 95%;
    margin: .9375rem auto 0;
  }

  .swiperPic img{
    width: 100%;
    height: 100%;
  }

</style>
