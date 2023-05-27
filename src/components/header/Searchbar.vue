<template>
  <div class="flex relative">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-7 mr-5 focus:outline-none focus:outline-shadow"
      placeholder="Search..."
    />

    <div class="absolute top-5 left-2 transform -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-gray-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>

    <div v-if="false" class="absolute z-10 mt-12 ml-2 rounded bg-gray-600 w-60">
      <ul class="mt-3">
        <li class="flex items-center border-b border-gray-500">
          <img
            src="https://content.rozetka.com.ua/goods/images/original/19479089.jpg"
            alt=""
            class="w-10 p-1"
          />
          <span class="ml-3">Die Hard</span>
        </li>
        <li class="flex items-center border-b border-gray-500">
          <img
            src="https://content.rozetka.com.ua/goods/images/original/19479089.jpg"
            alt=""
            class="w-10 p-1"
          />
          <span class="ml-3">Die Hard</span>
        </li>
        <li class="flex items-center border-b border-gray-500">
          <img
            src="https://content.rozetka.com.ua/goods/images/original/19479089.jpg"
            alt=""
            class="w-10 p-1"
          />
          <span class="ml-3">Die Hard</span>
        </li>
      </ul>
    </div>

    <img
      id="avatar"
      src="https://this-person-does-not-exist.com/img/avatar-gen4d1ccaca85816321cdc875ce6597954f.jpg"
      class="h-10 rounded-full mr-5"
      alt="user"
    />
  </div>
</template>

<script>
export default {
  name: "h-SearchBar",
};
</script>

<style scoped></style>
