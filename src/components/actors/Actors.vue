<template>
  <div class="container mx-auto px-4 py-16">
    <div v-if="!processing && actors.length">
      <h2 class="text-yellow-500 text-lg uppercase font-semibold">
        Popular Actors
      </h2>
      processing
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <ActorItem v-for="actor in actors" :key="actor.id" :actor="actor" />
      </div>
    </div>

    <Spinner v-if="processing" />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import ActorItem from "@/components/items/ActorItem.vue";

export default {
  name: "h-actors",
  components: {
    ActorItem,
    Spinner,
  },
  data: () => ({
    actors: [],
    processing: false,
  }),
  mounted() {
    this.fetchActors(1);
  },

  methods: {
    async fetchActors(page) {
      try {
        this.processing = true;
        const {
          data: { results },
        } = await this.$http.get(`/person/popular?page=${page}`);
        this.actors = results;

        this.processing = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
