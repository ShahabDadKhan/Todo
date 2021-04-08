<template>
  <v-app class="vue">
    <!-- <the-navbar></the-navbar> -->
    <div class="grey-light">
      <router-view></router-view>
      <!-- <home></home> -->
    </div>
  </v-app>
</template>

<script>
// import TheNavbar from "./components/TheNavbar.vue";
// import Home from "./views/Home";
export default {
  name: "App",
  components: {
    // TheNavbar,
    // Home,
  },
  data: () => ({
    //
  }),
};
</script>
