<template>
  <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Products</h2>
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Products
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Current Count
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Shipping Count
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Expiry Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- one row -->
              <tr  v-for="post in posts" :key="post.item_id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <!-- item image -->
                    <div class="flex-shrink-0 w-10 h-10">
                      
                      <img
                        class="w-full h-full rounded-full"
                        :src="post.image_url"
                        alt=""
                      />
                    </div>
                    <!-- item name -->
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{post.item_name}}
                      </p>
                    </div>
                  </div>
                </td>
                <!-- current count -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{post.current_count}}</p>
                </td>
                <!-- shipping count -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{post.shipping_count}}</p>
                </td>
                <!-- expiry date -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{post.expiry}}
                  </p>
                </td>
                <!-- status of item -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{{post.status}}</span>
                  </span>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>

        <div>
          <button
            class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="toggleModal()"
          >
            Add New Item
          </button>
          <div
            v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
          >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <!--header-->
                <div
                  class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
                >
                  <h3 class="text-3xl font-semibold">
                    Add a new item to store
                  </h3>
                  <button
                    c lass="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="toggleModal()"
                  >
                    <span
                      class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                    >
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="mt-10 sm:mt-0">
                    <div class="mt-5 md:mt-0 md:col-span-12">
                      <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Item Name</label
                                >
                                <input
                                  type="text"
                                  name="first_name"
                                  id="first_name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="last_name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Category</label
                                >
                                <input
                                  type="text"
                                  name="last_name"
                                  id="last_name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="first_name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Item Price</label
                                >
                                <input
                                  type="text"
                                  name="first_name"
                                  id="first_name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="last_name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Image URL</label
                                >
                                <input
                                  type="text"
                                  name="last_name"
                                  id="last_name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-6">
                                <label
                                  for="street_address"
                                  class="block text-sm font-medium text-gray-700"
                                  >Item Description</label
                                >
                                <input
                                  type="text"
                                  name="street_address"
                                  id="street_address"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div
                                class="col-span-6 sm:col-span-6 lg:col-span-2"
                              >
                                <label
                                  for="city"
                                  class="block text-sm font-medium text-gray-700"
                                  >Item Quantity</label
                                >
                                <input
                                  type="number"
                                  name="city"
                                  id="city"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div
                                class="col-span-6 sm:col-span-3 lg:col-span-2"
                              >
                                <label
                                  for="state"
                                  class="block text-sm font-medium text-gray-700"
                                  >Current Count</label
                                >
                                <input
                                  type="number"
                                  name="state"
                                  id="state"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div
                                class="col-span-6 sm:col-span-3 lg:col-span-2"
                              >
                                <label
                                  for="postal_code"
                                  class="block text-sm font-medium text-gray-700"
                                  >Shipping Count</label
                                >
                                <input
                                  type="number"
                                  name="postal_code"
                                  id="postal_code"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                              <div class="col-span-6">
                                <label
                                  for="date"
                                  class="block text-sm font-medium text-gray-700"
                                  >Expiry Date</label
                                >
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                <!--footer-->
                <div
                  class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                >
                  <button
                    class="text-red-500 border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Close
                  </button>
                  <button
                    class="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Confirm
                  </button>
                </div>

                </div>
              </div>
            </div>
          </div>
          <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </div>
      </div>
    
  </body>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      showModal: false,
      posts:[],
      errors:[]
    };
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    },
  },
  // items pics
  async beforeCreate() {
    //console.log('hi')
    const ip = await this.$axios.$get(`http://localhost:5001/item/all`)
    
    this.posts = ip.items
    console.log(this.posts)
  }

};
</script>
