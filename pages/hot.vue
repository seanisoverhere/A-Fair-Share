<template>
  <div>
    <navbar-component></navbar-component>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">

           <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="post in posts" :key="post.item_id">
              <!-- FIRST image-->
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="post.image_url" >
              </a>
              <!--description below-->
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{post.category}}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{post.item_name}}</h2>
                <p class="mt-1">${{post.item_price}}</p>
              </div>
          </div> 
         
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from "../components/Navbar"
import axios from 'axios'

export default {
  data() {
    return {
      posts:[],
      errors:[]
    }
  },
  name: "hot",
  components: {
    NavbarComponent
  },
  // items pics
  async beforeCreate() {
    //console.log('hi')
    const ip = await this.$axios.$get(`http://localhost:5001/item/all/pending`)
    // console.log(ip.urls.full)
    this.posts = ip.items
    console.log(this.posts)
    // try {
    //   const response = await axios.get(`http://localhost:5001/item/all/pending`)
    //   this.posts = response.data
    //   console.log(this.posts)
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>