<template>
  <div id="app" v-cloak>
    <div
      class="flex justify-between items-center border-b border-gray-500 py-2"
    >
      <Navbar />
      <Searchbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar";
import Searchbar from "@/components/header/Searchbar";

export default {
  name: "App",
  components: { Navbar, Searchbar },
};
</script>

<style>
[v-cloak] {
  /* // display: block; */
}
</style>
