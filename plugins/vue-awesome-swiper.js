import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { directive } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

export default {
  directives: {
    swiper: directive
  }
}