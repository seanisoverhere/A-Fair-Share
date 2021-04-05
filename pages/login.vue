<template>
  <body class="bg-white font-family-karla h-screen">
    <div>
      <Alert :visible="displayCard" position="top-right" :color="cardColor" :title="cardTitle" :description="cardMessage" />
    </div>
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <nuxt-link to="/">
          <div
            class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
          >
            <img src="../assets/img/logo.svg" width="50" height="50" />
          </div>
        </nuxt-link>

        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <p class="text-center text-3xl">Welcome.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                v-model="email"
                type="email"
                id="email"
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              @click="login()"
              type="submit"
              value="Log In"
              class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              Don't have an account?
              <nuxt-link to="/register" class="underline font-semibold"
                >Register here.</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="../assets/img/clothes-3.jpeg"
        />
      </div>
    </div>
  </body>
</template>
<script>
import Alert from "../components/Alert";

import NavbarComponent from "../components/Navbar.vue";
import TestimonialComponent from "../components/Testimonial";
import ItemsCarousel from "../components/ItemsCarousel";
import FooterComponent from "../components/Footer";
import ButtonComponent from "../components/Button";
import SplitComponent from "../components/Split";

const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`;

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      displayCard: false,
      cardColor: "",
      cardTitle: "",
      cardMessage: "",
    };
  },

  methods: {
    async login() {
      try {
        const response = await this.$axios.$post(
          "http://localhost:5003/user/login",
          {
            email: this.email,
            user_password: this.password,
          }
        )

        this.handleDisplayCard('success', 'Login successful!', response['user_type'])
        this.handleCreateDataStore(response)
      } catch(error) {
        const errorResponse = error.response.data
        this.handleDisplayCard('error', errorResponse.message, null)
      }
    },

    handleDisplayCard(type, message, userType) {
      this.displayCard = true
      this.cardMessage = message
      switch (type) {
        case 'success':
          this.cardColor = 'success'
          this.cardTitle = 'Welcome'
          break

        case 'error':
          this.cardColor = 'error'
          this.cardTitle = 'Login Failed'
          break
      }

      setTimeout(() => {
        this.displayCard = false;

        if (type === 'success') {
          this.handleRedirect(userType)
        }
      }, 3000)
    },

    handleCreateDataStore(response) {
      const userType = response.user_type
      const userId = response.user_details.user_id
      const fullname = response.user_details.fullname

      this.$auth.$state = {
        'user_type': userType,
        'user': {
          'user_id': userId,
          'fullname': fullname
        },
        'cart': []
      }

    handleRedirect(userType) {
      if (userType === 'admin') this.$router.push('/admin')
      else this.$router.push('/')
    }
  },

    name: "landing-page",

  components: {
    NavbarComponent,
    TestimonialComponent,
    FooterComponent,
    ButtonComponent,
    ItemsCarousel,
    SplitComponent,
    Alert
  },
};
</script>

<style scoped></style>
