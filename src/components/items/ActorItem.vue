<template>
  <div>
    <router-link :to="`/actor/${actor.id}`">
      <img class="w-full" :src="profileImage" alt="" />
      <h3>{{ actor.name }}</h3>
      <p class="text-gray-400">{{ knownFor }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Actor-Item",
  props: {
    actor: {
      type: Object,
      required: true,
    },
  },

  computed: {
    profileImage() {
      const profileImage = this.actor.profile_path;

      if (profileImage) {
        return `https://image.tmdb.org/t/p/w235_and_h235_face${this.actor.profile_path}`;
      }
      return "https://via.placeholder.com/358x358";
    },
    knownFor() {
      let knownStr = "";

      for (let i = 0; i < this.actor.known_for.length - 1; i++) {
        knownStr += this.actor.known_for[i].title;
      }

      return knownStr;
    },
  },
};
</script>

<style scoped></style>
