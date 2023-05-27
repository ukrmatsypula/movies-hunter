<template>
  <div>
    <h2 class="uppercase text-lg text-yellow-500 mt-5 font-semibold">
      Popular Movies
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/items/MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
};
</script>

<style scoped></style>
