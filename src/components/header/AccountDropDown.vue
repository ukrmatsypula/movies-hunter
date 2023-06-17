<template>
  <div class="relative">
    <div
      v-if="isOpen"
      class="fixed bg-black top-0 left-0 opacity-50 w-full h-full z-10"
      @click.self="isOpen = false"
    ></div>
    <button @click="isOpen = !isOpen" class="outline-none">
      <img
        id="avatar"
        src="https://this-person-does-not-exist.com/img/avatar-gen4d1ccaca85816321cdc875ce6597954f.jpg"
        class="h-8 rounded-full mr-5 outline-none"
        alt="user"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute bg-white rounded-xl w-48 py-2 right-3 shadow-xl z-10"
    >
      <a
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
        >Account Setting</a
      >
      <a
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
        >Support</a
      >
      <a
        @click="logout"
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
        >Logout</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),

  methods: {
    logout() {
      this.$store.dispatch("setUserLoggedIn", false);
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
