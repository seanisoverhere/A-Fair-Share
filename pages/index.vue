<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 70vh;"
      >
        <div class="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container pt-20 relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="px-6">
                <h1 class="text-white font-semibold text-5xl">
                  Something something crowdsource for free shipping
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Lorem ipsum crowdsourcing for free shipping
                </p>
              </div>
              <div class="pt-10">
                <button-component></button-component>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            preserveAspectRatio="none"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-porcelain fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-porcelain -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition duration-500 hover:-translate-y-5"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Crowdsource Shipping</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit dignissimos aut possimus in voluptatem est officiis
                    alias odio commodi. Sint.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              class="w-full md:w-4/12 px-4 text-center"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition duration-500 hover:-translate-y-5"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Trustworthy</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores quasi ad, molestias hic culpa architecto. Deserunt
                    accusamus iste provident eos.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition duration-500 hover:-translate-y-5"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Something something</h6>
                  <p id="element" class="mt-2 mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus id recusandae nihil cum animi itaque quae sit
                    molestias a laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pt-5 pb-16 mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center">
            <div class="w-full px-4">
              <h2 class="text-3xl font-medium title-font pb-10">
                Hot Items For You
              </h2>
              <div class="flex mb-2 -mt-5 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <items-carousel></items-carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <testimonial-component></testimonial-component>
      <footer-component></footer-component>
    </main>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import TestimonialComponent from "../components/Testimonial";
import ItemsCarousel from "../components/ItemsCarousel";
import FooterComponent from "../components/Footer";
import ButtonComponent from "../components/Button";

const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`;

export default {
  data() {
    return {
      imageURL: null,
    };
  },
  name: "landing-page",
  components: {
    NavbarComponent,
    TestimonialComponent,
    FooterComponent,
    ButtonComponent,
    ItemsCarousel,
  },
  async beforeCreate() {
    // const ip = await this.$axios.$get(url)
    // console.log(ip.urls.full)
    // this.imageURL = ip
    // console.log(this.$auth.$state)
  },
};
</script>

<style scoped></style>
