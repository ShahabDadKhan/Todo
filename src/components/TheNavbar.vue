<template>
  <!-- <v-app> -->
  <div class="main">
    <v-app-bar
      app
      fixed
      color="grey darken-2"
      class="d-flex align-center appbar pt-2"
      prominent
      height="70"
      elevate-on-scroll
    >
      <!-- <v-app-bar-nav-icon
        class="white--text "
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon> -->

      <v-btn icon class="white--text" @click="drawer = !drawer">
        <v-icon flat>{{ drawer === false ? "list" : "close" }} </v-icon>
      </v-btn>

      <v-app-bar-title class="white--text py-0 pb-3 align-self-center"
        >Home</v-app-bar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon mr-3>
        <!-- <v-text-field placeholder="Search" disabled></v-text-field> -->
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="grey darken-2" v-model="drawer" app dark bottom>
      <v-layout>
        <v-list-item class=" d-flex justify-center mt-5">
          <v-list-item-avatar size="100">
            <v-img src="../img/p1.jpg" class="avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-layout>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="teal darken-4--text text--accent-4"
        >
          <v-list-item class="list" v-for="link in links" :key="link.text">
            <v-list-item-icon>
              <v-icon>{{ link.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-spacer></v-spacer> -->
  </div>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "" },
        { icon: "calendar_today", text: "Calender", route: "" },
        { icon: "pie_chart_outline", text: "Overview", route: "" },
        { icon: "timeline", text: "Timeline", route: "" },
        { icon: "groups", text: "Groups", route: "" },
        { icon: "list", text: "Lists", route: "" },
        { icon: "person", text: "Profile", route: "" },
        { icon: "settings", text: "Settings", route: "" },
        { icon: "logout", text: "Log Out", route: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.maincard {
  height: 100%;
}

.h1 {
  height: 100%;
}

.appbar::v-deep .v-toolbar__content {
  width: 100%;
  // height: 30%;
}

.avatar {
  transition: 0.3s all;
}

.avatar:hover {
  transform: scale(1.1);
}

.list {
  transition: 0.3s all;
}

.list:hover {
  transform: scale(1.1);
}
.list:active {
  transform: translateY(5px);
}
</style>
