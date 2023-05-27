<template>
  <div class="flex">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-5 mr-5 focus:outline-none focus:outline-shadow"
      placeholder="Search..."
    />

    <img
      id="avatar"
      src="https://this-person-does-not-exist.com/img/avatar-gen4d1ccaca85816321cdc875ce6597954f.jpg"
      class="max-w-50 h-10 rounded-full"
      alt="user"
    />
  </div>
</template>

<script>
export default {
  name: "h-SearchBar",
};
</script>

<style scoped></style>
