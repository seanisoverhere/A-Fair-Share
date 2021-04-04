<template>
  <body class="bg-white font-family-karla h-screen">
    <div>
      <!-- <Alert -->
      <!-- :visible="alertVisible" -->
      <!-- position="top-right" -->
      <!-- color="warning" -->
      <!-- title="Warning" -->
      <!-- description="There was an error in signing up for an account. Please try again." -->
      <!-- /> -->
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
import axios from "axios";
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
      name: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:5003/user/signup/user", {
          body: {
            name: this.name,
            email: this.email,
            password: this.password,
          },
        });
        // if (response.status === 201) {
        // window.location.replace = "/pages/index.vue";
        // } else {
        // this.handleAlert();
        // }

        // console.log("hi");
        // console.log(this.name);
        // console.log(this.email);
        // console.log(this.password);
      } catch (e) {
        this.errors.push(e);
      }
    },

    // handleAlert() {
    // this.alertVisible = true;
    // setTimeout(() => {
    // this.alertVisible = false;
    // }, 4000);
    // },
  },

  name: "landing-page",

  components: {
    NavbarComponent,
    TestimonialComponent,
    FooterComponent,
    ButtonComponent,
    ItemsCarousel,
    SplitComponent,
  },
};
</script>

<style scoped></style>
