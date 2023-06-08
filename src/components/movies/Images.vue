<template>
  <div class="container mx-auto border-b border-gray-500 p-4">
    <h2 class="text-4xl font-semibold mb-5">Images</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="m-2" v-for="(image, index) in images?.backdrops" :key="index">
        <img
          @click="openModal(image)"
          :src="imageFilm(image.file_path)"
          alt=""
          class="hover:opacity-75 transition ease-in-out duration-150 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-images",
  props: {
    images: {
      required: true,
    },
  },
  methods: {
    imageFilm(image) {
      if (image) {
        return `https://image.tmdb.org/t/p/original${image}`;
      }
    },
    openModal(image) {
      let imageFullPath = "";
      if (image.file_path) {
        imageFullPath = `https://image.tmdb.org/t/p/original${image.file_path}`;
      } else {
        imageFullPath = "https://via.placeholder.com/300x450";
      }

      this.$emit("on-image-click", imageFullPath);
    },
  },
};
</script>

<style scoped></style>
