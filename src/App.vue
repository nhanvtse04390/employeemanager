<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Narbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>