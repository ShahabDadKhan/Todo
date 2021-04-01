<template>
  <v-app>
    <div class="signup d-flex justify-center align-center flex-column">
      <v-form class="input" dark>
        <p class="signup-text ma-5">Sign Up</p>
        <v-text-field
          label="Name"
          v-model="name"
          dark
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          dark
          prepend-icon="email"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          dark
          prepend-icon="lock"
        ></v-text-field>
        <v-text-field
          label="Birthday"
          v-model="birthday"
          dark
          prepend-icon="today"
          class="mb-5"
        >
          <!-- <v-row justify="center">
            <v-date-picker
              v-model="date"
              :allowed-dates="allowedDates"
              class="mt-4"
              min="2016-06-15"
              max="2018-03-20"
            ></v-date-picker>
          </v-row> -->
        </v-text-field>
      </v-form>
      <v-btn class="my-5" @click="onSignUp">Join</v-btn>
      <div class="d-flex flex-row align-center">
        <div class="grey--text my-5">Already have an account?</div>
        <v-btn
          href="#"
          elevation="0"
          class=" transparent white--text text-capitalize"
          to="signin"
          >Sign In</v-btn
        >
      </div>
    </div>
  </v-app>
</template>

<script>
import { auth } from "../firebase.js";

export default {
  // data: () => ({
  //   name: "",
  //   email: "",
  //   password: "",
  //   birthday: "",
  // }),
  data() {
    return {
      name: "",
      email: "",
      password: "",
      birthday: "",
    };
  },

  methods: {
    // allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0, unknnown code....
    async onSignUp() {
      console.log(this.error, this.password);
      try {
        const res = await auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        res.user.updateProfile({
          displayName: this.name,
        });
        this.$router.push("/home");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signup {
  min-width: 100%;
  min-height: 100%;
  background-image: url(../img/r2.jpg);
  background-size: cover;
  // background-color: #6d4c41;
}

.signup-text {
  color: rgb(241, 235, 235);
  font-size: 50px;
  font-weight: lighter;
}

.input {
  min-width: 35% !important;
  min-height: 20%;
}
</style>
