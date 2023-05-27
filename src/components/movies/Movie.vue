<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-500 pb-2">
      <img
        src="https://content.rozetka.com.ua/goods/images/original/19479089.jpg"
        alt="joker"
        class="w-64"
      />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">Joker</h1>
        <span class="text-gray-500 text-sm flex items-center">
          <svg
            class="w-3 h-3 text-yellow-500 fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 116.864"
            enable-background="new 0 0 122.88 116.864"
            xml:space="preserve"
          >
            <g>
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"
              />
            </g>
          </svg>
          82% | 2019-10-02 Crime, Thriller, Drama</span
        >
        <p class="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nisi
          dignissimos, eius at iusto quisquam autem officia eveniet aperiam
          rerum similique culpa reiciendis incidunt commodi provident animi
          dolore sunt quaerat?
        </p>
        <div class="mt-5">
          <span class="font-semi">Featured Cast</span>

          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span>Scott Silver </span>
              <span class="text-gray-500">Writter</span>
            </div>
            <div class="flex flex-col mt-5">
              <span>Bruce Berman </span>
              <span class="text-gray-500">Producer</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            class="rounded bg-yellow-500 px-5 py-3 text-black inline-flex"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
            Play Trailler</a
          >

          <a
            class="rounded bg-yellow-500 px-5 py-3 text-black inline-flex ml-5"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            Favorite</a
          >
        </div>
      </div>
    </div>

    <Cast />
    <Images />
  </div>
</template>

<script>
import Cast from "@/components/movies/Cast.vue";
import Images from "@/components/movies/Images.vue";

export default {
  name: "h-movie",
  components: {
    Cast,
    Images,
  },
};
</script>

<style scoped></style>
