<template>
  <div class="container mx-auto px-4 py-16">
    <div>
      <h2 class="text-yellow-500 text-lg uppercase font-semibold mb-4">
        Popular Actors
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <ActorItem v-for="(actor, index) in actors" :key="index" :actor="actor" />
      </div>
    </div>

    <div v-if="processing">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
import ActorItem from "@/components/items/ActorItem.vue";

export default {
  name: "h-actors",
  components: {
    ActorItem,
  },
  data: () => ({
    actors: [],
    processing: false,
    currentPage: 1,
  }),
  mounted() {
    this.scroll();
    this.fetchActors(this.currentPage);
  },

  methods: {
    async fetchActors(page) {
      try {
        this.processing = true;
        const {
          data: { results },
        } = await this.$http.get(`/person/popular?page=${page}`);
        this.actors.push(...results);

        this.processing = false;
      } catch (err) {
        console.log(err);
      }
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.currentPage++;
        }
      };
    },
  },

  watch: {
    currentPage() {
      this.fetchActors(this.currentPage);
    },
  },
};
</script>

<style scoped></style>
