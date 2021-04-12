<template>
  <div>
    <navbar-component></navbar-component>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">

           <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="item in itemsByStatus" :key="item.itemId" @click="handlePostClick(item.itemId)">
              <!-- FIRST image-->
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="item.imageUrl" >
              </a>
              <!--description below-->
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{item.category}}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{item.itemName}}</h2>
                <p class="mt-1">${{item.itemPrice}}</p>
              </div>
          </div> 
         
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from "../components/Navbar"
import gql from 'graphql-tag';

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
            itemPrice
          }
        }
      `,
    },
  },

  // items pics
  // async beforeCreate() {
  //   const ip = await this.$axios.$get(`http://localhost:5001/item/all/pending`)
  //   this.posts = ip.items
  // },

  methods: {
    handlePostClick(id) {
      const url = '/product/' + id
      this.$router.push(url)
    }
  }
}
</script>