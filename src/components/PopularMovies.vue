<template>
  <div>
    <h2 class="uppercase text-lg text-yellow-500 mt-5 font-semibold">
      Popular Movies
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <Spinner v-if="processing" />

      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :genre="genre"
      />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import MovieItem from "@/components/items/MovieItem.vue";

export default {
  components: {
    MovieItem,
    Spinner,
  },
  data: () => ({
    movies: [],
    genre: [],
    processing: false,
  }),
  async mounted() {
    try {
      this.processing = true;

      const {
        data: { results },
      } = await this.$http.get("/movie/popular");

      this.movies = results;
      this.processing = false;
    } catch (error) {
      console.log(error);
    }

    this.fetchGenre();
  },

  methods: {
    async fetchGenre() {
      try {
        const {
          data: { genres },
        } = await this.$http.get("/genre/movie/list");

        this.genre = genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
