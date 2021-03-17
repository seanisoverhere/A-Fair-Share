<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Item 1</swiper-slide>
    <swiper-slide>Item 2</swiper-slide>
    <swiper-slide>Item 3</swiper-slide>
    <swiper-slide>Item 4</swiper-slide>
    <swiper-slide>Item 5</swiper-slide>
    <swiper-slide>Item 6</swiper-slide>
    <swiper-slide>Item 7</swiper-slide>
    <swiper-slide>Item 8</swiper-slide>
    <swiper-slide>Item 9</swiper-slide>
    <swiper-slide>Item 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-responsive-breakpoints',
    title: 'Responsive breakpoints',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
.swiper {
  height: 500px;
  width: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size:  15px;
    background-color: #fff;
  }

</style>