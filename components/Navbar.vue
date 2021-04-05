<template>
  <header class="bg-white fixed w-full z-40 lg:h-15 sm:flex sm:justify-between shadow-lg sm:items-center lg:px-16 sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      
      <div>
        <img class="h-8" src="../assets/img/no_logo.svg" alt="Workcation">
      </div>
      <nuxt-link to="/">
        <div class="block px-2 py-1 text-black font-semibold">A-Fair-Share</div>
      </nuxt-link>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-black focus:text-black focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <nuxt-link to="/hot" class="block px-2 py-1 text-black font-semibold rounded hover:bg-gray-200">All Items</nuxt-link>
      <nuxt-link to="/checkout" class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2">Checkout</nuxt-link>
      <nuxt-link v-if="!isSignedIn" to="/login" class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2">Sign In</nuxt-link>
      <nuxt-link v-if="isSignedIn" to="/login" class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2">Logout</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isSignedIn: false
    }
  },

  mounted() {
    if (this.$auth.$state.user) this.isSignedIn = true
  }
}
</script>