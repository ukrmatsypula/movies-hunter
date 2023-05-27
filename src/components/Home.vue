<template>
  <div class="container mx-auto flex justify-between items-center border-b border-gray-500 py-2">
    <Navbar />
    <Searchbar />
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar";
import Searchbar from "@/components/header/Searchbar";

export default {
  name: "h-home",
  components: { Navbar, Searchbar },
};
</script>

<style scoped></style>
