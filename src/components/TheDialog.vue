<template>
  <!-- <v-container class="dialog-container"> -->
  <v-row justify="center">
    <v-dialog light v-model="dialog" scrollable max-width="50%" class="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
        <v-btn @click="dialog = !dialog">
          hello
        </v-btn>
      </template>
      <v-card>
        <the-todo />
        <v-card-actions>
          <v-btn color="green darken-1" text @click="openOne">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
import TheTodo from "./TheTodo.vue";
export default {
  components: { TheTodo },
  data() {
    return {
      // dialog: false,
      dialog: this.$store.state.dialog,
    };
  },
  methods: {
    openOne() {
      this.$store.commit("openDialog");
      console.log("hello");
      console.log(this.dialog);
    },
  },
  // computed: {
  //   theDialog() {
  //     this.$store.state.dialog;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.dialog::v-deep .v-card {
  height: 100%;
}
</style>
