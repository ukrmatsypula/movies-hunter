<template>
  <div class="container mx-auto">
    <div>
      <PopularMovies />
    </div>
  </div>
</template>

<script>
import PopularMovies from "@/components/PopularMovies";

export default {
  name: "h-home",
  components: { PopularMovies },
};
</script>

<style scoped></style>
