<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        Item 1
      </div>
      <div class="swiper-slide">
        Item 2
      </div>    
      <div class="swiper-slide">
        Item 3
      </div>    
      <div class="swiper-slide">
        Item 4
      </div>    
      <div class="swiper-slide">
        Item 5
      </div>    
      <div class="swiper-slide">
        Item 6
      </div>    
      <div class="swiper-slide">
        Item 7
      </div>    
      <div class="swiper-slide">
        Item 8
      </div>    
      <div class="swiper-slide">
        Item 9
      </div>    
      <div class="swiper-slide">
        Item 10
      </div>    
    </div>
  <div class="swiper-pagination" slot="pagination"></div>
</div>


</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'swiper-example-responsive-breakpoints',
  title: 'Responsive breakpoints',
  components: {
    Swiper,
    SwiperSlide
  },
  directive: {
    swiper: directive
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
    height: 400px;
  }

</style>