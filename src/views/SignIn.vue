<template>
  <v-app>
    <!-- <v-container class="container d-flex"> -->
    <div class="container d-flex justify-center align-center flex-column">
      <div class="O d-flex align-center justify-center mb-5">
        <div class="check "></div>
        <!-- <v-icon size="200" color="white">mdi-check</v-icon> -->
      </div>
      <v-form ref="form" v-model="valid" class="input d-flex flex-column">
        <!-- <h1>{{ message }}</h1> -->
        <v-text-field
          :rules="emailRules"
          label="Email"
          dark
          prepend-icon="person"
          required
          v-model.trim="email"
        ></v-text-field>
        <v-text-field
          :rules="passRules"
          type="password"
          label="Password"
          dark
          prepend-icon="lock"
          required
          v-model.trim="password"
        ></v-text-field>
      </v-form>
      <div class="btn-f d-flex justify-end">
        <v-btn href="#" elevation="0" class="transparent grey--text"
          >Forgot Password</v-btn
        >
      </div>
      <v-btn class="my-5 list white--text" color="red" dark @click="submitForm">
        Sign In
      </v-btn>
      <div class="d-flex flex-row align-center">
        <div class="grey--text my-5">Don't have an account?</div>
        <v-btn
          href="#"
          elevation="0"
          class=" transparent white--text text-capitalize"
          to="signup"
          >Sign Up</v-btn
        >
      </div>
    </div>
    <!-- </v-container> -->
  </v-app>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      formIsValid: true,
      mode: "logn",
      valid: true,
      // disable: disabled,

      // message: "",

      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",

        // (v) => v.include("@") || "Email must be less than 20 characters",
      ],
      password: "",
      passRules: [(v) => !!v || "Password is required"],
      select: null,
    };
  },

  methods: {
    //   submitForm() {
    //     this.formIsValid = true;
    //     if (
    //       this.name === "" ||
    //       this.name.includes("@") ||
    //       this.password.length < 6
    //     ) {
    //       this.formIsValid = false;
    //       return;
    //     }

    //     if (this.mode === "login") {
    //       //
    //     } else {
    //       this.$store.dispatch("signup", {
    //         email: this.email,
    //         password: this.password,
    //       });
    //     }
    //   },
    // },

    // Firebase authentication
    // if(email=!'' || password=!''){}
    async submitForm() {
      if (this.$refs.form.validate()) {
        try {
          const res = await auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );
          this.$router.push("../home");
          console.log(res);
        } catch (error) {
          // this.message = error.message;
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  height: 100%;
  /* background-color: violet; */
  background: url(../img/m1.jpg) center fixed;
  background-size: cover;
}

.input {
  min-width: 35% !important;
  min-height: 20%;
  /* color: white;
  background-color: #fff; */
}

.O {
  width: 200px;
  height: 200px;
  /* border: 2px solid whitesmoke; */
  border-radius: 50%;
  transform: rotate(-40deg);
  margin-top: -55px;
  background-color: whitesmoke;
}

.check {
  border-left: 20px solid red;
  border-bottom: 20px solid red;
  /* border: 2px solid white; */
  margin-bottom: 20px;
  margin-left: 22px;
  width: 95px;
  height: 45px;
}

.btn-f {
  // width: 37%;
  margin-left: 300px;
}

// .btn-f:hover {
// transform: scale(1.1);
// transition: all 0.2s ease-in;
// background-color: grey !important;
// }
</style>
