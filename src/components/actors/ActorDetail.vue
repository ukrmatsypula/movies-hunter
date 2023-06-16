<template>
  <div>
    <h3>actor details id: {{ id }}</h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: "",
  }),

  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped></style>
