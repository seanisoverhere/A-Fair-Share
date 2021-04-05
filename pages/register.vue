<template>
  <body class="bg-white font-family-karla h-screen">
    <div>
      <Alert :visible="displayCard" position="top-right" :color="cardColor" :title="cardTitle" :description="cardMessage" />
    </div>
    <div class="w-full flex flex-wrap">
      <!-- Register Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <nuxt-link to="/">
          <div
            class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12"
          >
            <img src="../assets/img/logo.svg" width="50" height="50" />
          </div>
        </nuxt-link>

        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <p class="text-center text-3xl">Join Us.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div class="flex flex-col pt-4">
              <label for="name" class="text-lg">Name</label>
              <input
                v-model="name"
                type="text"
                id="name"
                placeholder="John Smith"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

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
              <label for="email" class="text-lg">Phone Number</label>
              <input
                v-model="phone_number"
                type="text"
                id="phone_number"
                placeholder="91234567"
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

            <div class="flex flex-col pt-4">
              <label for="confirm-password" class="text-lg"
                >Confirm Password</label
              >
              <input
                type="password"
                id="confirm-password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              @click="register()"
              type="submit"
              value="Register"
              class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              Already have an account?
              <nuxt-link to="/login" class="underline font-semibold"
                >Log in here.</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="../assets/img/clothes-7.jpeg"
        />
      </div>
    </div>
  </body>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import TestimonialComponent from "../components/Testimonial";
import ItemsCarousel from "../components/ItemsCarousel";
import FooterComponent from "../components/Footer";
import ButtonComponent from "../components/Button";
import SplitComponent from "../components/Split";
import Alert from "../components/Alert";

const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`;

export default {
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      displayCard: false,
      cardColor: "",
      cardTitle: "",
      cardMessage: "",
      errors: [],
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.$post(
          'http://localhost:5003/user/signup/user',
          {
            "email": this.email,
            "fullname": this.name,
            "phone_number": this.phone_number,
            "user_password": this.password,
          }
        )

        this.handleDisplayCard('success', 'Registration successful')
      } catch (error) {
        this.handleDisplayCard('error', error.response.message)
      }
    },

    async login() {
      try {
        const response = await this.$axios.$post(
          'http://localhost:5003/user/login',
          {
            "email": this.email,
            "user_password": this.password,
          }
        )

        this.handleCreateDataStore(response)
        this.$router.push('/')
      } catch(error) {
        console.log(error)
      }
    },

    handleDisplayCard(type, message) {
      this.displayCard = true
      this.cardMessage = message
      switch (type) {
        case 'success':
          this.cardColor = 'success'
          this.cardTitle = 'Welcome'
          break

        case 'error':
          this.cardColor = 'error'
          this.cardTitle = 'Registration Unsuccessful'
          break
      }

      setTimeout(() => {
        if (type === 'success') {
          this.displayCard = false;
          this.login()
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
