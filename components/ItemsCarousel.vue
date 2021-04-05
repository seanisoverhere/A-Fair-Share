<template>
  <swiper class="swiper" :options="swiperOption">
    <!-- HELPPP -->
    <swiper-slide v-for="post of posts" :key="post.item_id">
      <img src= {{post.image_url }}>
    </swiper-slide>

    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
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
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: {
          enabled: true
        }
      },
      
    posts:[],
    errors:[]
    }
  },
  // carousel
  async created() {
    try {
      const response = await axios.get(`http://localhost:5001/item/all/pending`)
      this.posts = response.data
      console.log(this.posts)
    } catch (e) {
      this.errors.push(e)
    }
  }

}
</script>
<style scoped>

.carousel-wrapper {
  padding: 40px;
  height: 350px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 350px;
}

</style>