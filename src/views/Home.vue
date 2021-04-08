<template>
  <v-app>
    <!-- <div> -->
    <the-navbar></the-navbar>
    <v-main class=" mx-3 my-5">
      <!-- <v-container> -->

      <!-- <h1 class="subtitle-1 mx-4  black--text">Dashboard</h1> -->
      <v-container class="my-5">
        <!-- <v-card elevation="2"> -->
        <v-row wrap class="black--text" justify="center">
          <v-col
            v-for="group in groups"
            :key="group.name"
            md="2"
            class="ma-5 d-flex justify-center flex-column align-center"
          >
            <v-img height="100px" width="100px" :lazy-src="`${group.src}`" />
            <!-- <img :src="group.src" alt="image1" /> -->
            <v-card-title> {{ group.name }} </v-card-title>
            <v-card-subtitle>{{ group.items }} items</v-card-subtitle>
            <v-card-actions>
              <v-btn height="20" width="40">Enter</v-btn>
            </v-card-actions>

            <V-divider
              :class="`mt-5 ml-1 ${group.name} `"
              width="100"
            ></V-divider>
          </v-col>
        </v-row>
        <!-- </v-card> -->
      </v-container>
      <!-- </v-container> -->
      <!-- </div> -->
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
export default {
  components: { TheNavbar },
  data() {
    return {
      groups: [
        { name: "Shop", items: "25", src: "../img/shop.jpg" },
        { name: "Work", items: "12", src: "../img/work.jpg" },
        { name: "Exercise", items: "3", src: "../img/e.jpg" },
        { name: "Vacation", items: "6", src: "../img/v.jpg" },
        { name: "Meeting", items: "2", src: "../img/mt.jpg" },
        { name: "Add", items: "0", src: "../img/add.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Shop {
  border-bottom: 3px solid skyblue !important;
}

.Work {
  border-bottom: 3px solid slategray !important;
}

.Exercise {
  border-bottom: 3px solid greenyellow !important;
}

.Vacation {
  border-bottom: 3px solid magenta !important;
}
.Meeting {
  border-bottom: 3px solid blue !important;
}
</style>
