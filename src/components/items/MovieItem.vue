<template>
  <div>
    <router-link :to="`/movies-hunter/movies-hunter/movie/${movie.id}`">
      <img
        id="avatar"
        :src="posterPath"
        class="hover:opacity-75 transition ease-in-out duration-150"
        alt="user"
      />
    </router-link>

    <h2>{{ movie.title }}</h2>
    <div class="flex items-center">
      <svg
        class="w-3 h-3 text-yellow-500 fill-current"
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
        </g></svg
      ><span class="ml-2"
        >{{ movie.vote_average * 10 }}% | {{ movie.release_date }}</span
      >
    </div>
    <span class="text-gray-500 text-sm">
      <span v-for="(genrIds, index) in movie.genre_ids" :key="index">{{
        genreTypeNames(genrIds, index)
      }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "h-movie",
  props: {
    movie: {
      required: true,
    },
    genre: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
  },

  methods: {
    genreTypeNames(ids, index) {
      for (const item of this.genre) {
        if (item.id === ids) {
          if (this.movie.genre_ids.length - 1 === index) {
            return item.name;
          } else {
            return item.name + ", ";
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
