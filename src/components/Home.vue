<template>
  <div class="container mx-auto">
    <div>
      <PopularMovies />
      <UpcomingMovies />
    </div>
  </div>
</template>

<script>
import PopularMovies from "@/components/PopularMovies";
import UpcomingMovies from "@/components/UpcamingMovies.vue";

export default {
  name: "h-home",
  components: { PopularMovies, UpcomingMovies },
};
</script>

<style scoped></style>
