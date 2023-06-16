<template>
  <div class="flex relative">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-7 mr-5 focus:outline-none focus:outline-shadow"
      placeholder="Search..."
      v-model="searchTerm"
      @input="debounceSearch"
      @keyup.esc="keyboardEvent"
      @focus="handleFocus"
    />

    <div class="absolute top-5 left-2 transform -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-gray-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>

    <div class="absolute z-10 mt-12 ml-2 rounded bg-gray-600 w-60">
      <ul class="mt-3" v-if="showSearchResult">
        <li v-for="movie in searchResult" :key="movie.id">
          <router-link
            @click.native="showSearchResult = false"
            :to="`/movie/${movie.id}`"
            class="flex items-center border-b border-gray-500 hover:opacity-75 transition ease-in-out duration-150 cursor-pointer"
          >
            <img :src="posterPath(movie)" alt="" class="w-10 p-1" />
            <span class="ml-3">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>

      <ul class="px-3" v-else>
        <li v-if="noResultFound">No result found for "{{ searchTerm }}"</li>
      </ul>
    </div>

    <img
      id="avatar"
      src="https://this-person-does-not-exist.com/img/avatar-gen4d1ccaca85816321cdc875ce6597954f.jpg"
      class="h-10 rounded-full mr-5"
      alt="user"
    />
  </div>
</template>

<script>
export default {
  name: "h-SearchBar",
  data: () => ({
    searchResult: [],
    searchTerm: "",
    processing: true,
    showSearchResult: false,
  }),

  computed: {
    noResultFound() {
      return (
        !this.searchResult.length && !this.processing && this.searchTerm.length
      );
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.showSearchResult = false;
      }
    });
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);

      this.debounce = setTimeout(() => {
        if (event.target.value.length > 2) {
          this.processing = true;
          this.fetchSearch(event.target.value);
        }
      }, 600);
    },

    async fetchSearch(term) {
      try {
        const {
          data: { results },
        } = await this.$http.get(`/search/movie?query=${term}`);
        this.searchResult = results;
        this.showSearchResult = results.length ? true : false;
        this.processing = false;
      } catch (error) {
        console.log(error);
      }
    },

    posterPath(movie) {
      if (movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },

    keyboardEvent() {
      this.showSearchResult = false;
    },

    handleFocus() {
      if (this.searchTerm) {
        this.showSearchResult = true;
      }
    },
  },
};
</script>

<style scoped></style>
