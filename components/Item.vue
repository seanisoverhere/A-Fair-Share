<template>
  <div class="grid grid-cols-8 overflow-hidden col-gap-6 mb-5">
    <img class="block col-span-3 w-28 h-20 rounded" :src="item.image_url" />
    <div class="col-span-5">
      <div class="flex">
        <h6 class="text-sm font-semibold text-gray-800 flex-grow">{{ item.item_name }}</h6>
        <button>
          <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <p
        class="text-xs truncate text-gray-600"
      >{{item.item_desc }}</p>
      <span class="text-sm text-gray-800">$ {{ item.price }} SGD</span>
      <p class="mt-2 text-xs truncate text-gray-600">
        Quantity: {{item.quantity}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object
  }
};
</script>