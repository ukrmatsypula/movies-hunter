<template>
  <div class="container mx-auto border-b border-gray-500 p-4">
    <h2 class="text-4xl font-semibold mb-5">Cast</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2" v-for="cast in casts" :key="cast.id">
        <img
          :src="castProfileImage(cast)"
          alt=""
          class="hover:opacity-75 transition ease-in-out duration-150 w-full"
        />
        <span class="text-sm text-gray-300">{{ cast.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-cast",
  props: {
    casts: {
      required: true,
    },
  },
  methods: {
    castProfileImage(cast) {
      if (cast.profile_path) {
        return `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};
</script>

<style scoped></style>
