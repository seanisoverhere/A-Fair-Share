<template>  
  <header class="text-gray-600 body-font bg-white fixed z-50 w-full shadow-lg">
  <div class="container mx-auto flex flex-wrap p-4 pl-5 flex-col md:flex-row items-center">
    <nuxt-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">A-Fair Share</span>
    </nuxt-link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <nuxt-link to="/hot" class="mr-5 hover:text-gray-900 test">
      Hot Items
      </nuxt-link>
      <nuxt-link to="/new" class="mr-5 hover:text-gray-900 test">
      New Arrivals
      </nuxt-link>
    </nav>
    <nuxt-link to="/login">
    <button class="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0">Log In    
    </button>
    </nuxt-link>
  </div>
</header>
</template>


<style scoped>

.test {
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
}
.test:after {    
  background: none repeat scroll 0 0 transparent;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.test:hover:after { 
  width: 100%; 
  left: 0; 
}

</style>
