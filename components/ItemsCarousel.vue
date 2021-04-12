<template>
  <swiper v-if="itemsByStatus.length > 0" class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in itemsByStatus" :key="item.itemId">
      <!-- <img :data-src="post.image_url" class="swiper-lazy"> -->
      <div class="p-4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center swiper-lazy" :data-src="item.imageUrl" alt="blog">
          <div class="p-6 border-t-4 border-indigo-500">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{item.category.toUpperCase()}}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{item.itemName}}</h1>
            <p class="leading-relaxed mb-5">{{item.itemDesc}}</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" @click="handlePostClick(item.itemId)">Order now
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <img class="mr-1" src="../assets/img/people.gif"/> {{item.currentCount}}
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <img class="mr-2" src="../assets/img/truck.gif"/>  {{item.shippingCount}}
              </span>
            </div>
          </div>
        </div>
      </div>

    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

import gql from 'graphql-tag';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: {
          enabled: true,
        },
        lazy: true,
      },
      posts: [],
      errors: [],
    };
  },

  apollo: {
    itemsByStatus: {
      query: gql`
        query {
          itemsByStatus(status: "pending") {
            itemId
            itemName
            shippingCount
            currentCount
            imageUrl
            itemDesc
            category
          }
        }
      `,
    },
  },

  // carousel
  // async beforeCreate() {
  //   try {
  //     const url = "http://localhost:5001/item/all/pending";
  //     const response = await this.$axios.$get(url);
  //     this.posts = response.items;
  //   } catch (e) {
  //     this.errors.push(e);
  //   }
  // },
  methods: {
    handlePostClick(id) {
      console.log(id)
      const url = '/product/' + id
      this.$router.push(url)
    }
  }
};
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
}
</style>
