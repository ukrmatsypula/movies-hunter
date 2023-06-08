<template>
  <div
    class="w-full h-full flex items-center fixed top-0 left-0 cursor-pointer"
    style="background-color: rgba(0, 0, 0, 0.8)"
    v-show="value"
    @click.self="closeModal"
  >
    <div class="container mx-auto rounded-lg overflow-y-auto">
      <div class="bg-gray-900 rounded mx-auto p-5" style="max-width: 800px">
        <div class="flex justify-end relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 m-4 cursor-pointer hover:opacity-50 absolute -right-20 -top-10"
            @click="closeModal"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div>
          <img :src="mediaURL" v-if="!isVideo" alt="" />
          <iframe
            v-if="isVideo"
            class="w-full"
            :src="mediaURL"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media"
            height="600"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-media-modal",
  props: {
    value: {
      required: true,
    },
    mediaURL: {
      required: true,
    },
    isVideo: {
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-media-modal");
    },
  },
};
</script>

<style scoped></style>
