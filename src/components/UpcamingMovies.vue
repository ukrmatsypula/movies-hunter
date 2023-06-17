<template>
  <div class="mt-20" id="example">
    <h2 class="text-yellow-500 font-semibold uppercase font-4xl">
      Upcoming Movies
    </h2>
    <carousel-3d
      :controls-visible="true"
      :clickable="true"
      :listData="upcomingMovies"
      :height="500"
    >
      <slide v-for="(movie, i) in upcomingMovies" :index="i" :key="movie.id">
        <figure>
          <img :src="upcomingPoster(movie.poster_path)" />
          <figcaption>
            <router-link :to="`/movie/${movie.id}`" class="block">
              {{ movie.title }}
            </router-link>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
    this.fetchUpcomingMovies();
  },
  data: () => ({
    upcomingMovies: [],
  }),
  methods: {
    async fetchUpcomingMovies() {
      try {
        const {
          data: { results },
        } = await this.$http.get("/movie/upcoming");

        this.upcomingMovies = results;
      } catch (error) {
        console.log(error);
      }
    },
    upcomingPoster(poster) {
      if (poster) {
        return `https://image.tmdb.org/t/p/w300${poster}`;
      }
      return "https://via.placeholder.com/358x358";
    },
  },
};
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.next span,
.prev span {
  color: #fff;
}
</style>
